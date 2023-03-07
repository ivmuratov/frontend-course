import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  username: 'admin',
  age: 26,
  first: 'Ivan',
  lastname: 'Muratov',
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Novosibirsk',
};

describe('profileSlice', () => {
  it('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
      .toEqual({ readonly: true });
  });
  it('test set cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      readonly: false,
      form: {
        username: '',
      },
    };

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
      .toEqual({
        readonly: true,
        validateErrors: undefined,
        data,
        form: data,
      });
  });
  it('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        username: 'Vasya',
      },
    };

    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({
      username: 'Petya',
    })))
      .toEqual({
        form: { username: 'Petya' },
      });
  });

  it('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
      .toEqual({
        isLoading: true,
        validateErrors: undefined,
      });
  });

  it('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
      .toEqual({
        isLoading: false,
        validateErrors: undefined,
        readonly: true,
        validateError: undefined,
        form: data,
        data,
      });
  });
});
