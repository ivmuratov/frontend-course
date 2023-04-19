import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentRenderOptions, componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { User } from '@/entities/User';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
  id: '1',
  first: 'admin',
  lastname: 'admin',
  age: 30,
  currency: Currency.USD,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
};

const user: User = {
  id: '1',
  username: 'admin',
};

const options: ComponentRenderOptions = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: user,
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('EditableProfileCard', () => {
  it('edit button click -> toggle readonly', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
  });

  it('cancel button -> cancel edit form', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
  });

  it('data send on server', async () => {
    const mockPutReq = jest.spyOn($api, 'put');
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(mockPutReq).toHaveBeenCalled();
  });

  it('error', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  });
});
