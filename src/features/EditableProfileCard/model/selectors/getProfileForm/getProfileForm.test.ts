import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  it('should return form', () => {
    const form = {
      username: 'admin',
      age: 26,
      first: 'Ivan',
      lastname: 'Muratov',
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Novosibirsk',
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        form,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
