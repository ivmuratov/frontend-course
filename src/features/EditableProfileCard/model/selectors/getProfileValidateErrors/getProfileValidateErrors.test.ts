import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

describe('getProfileValidateErrors', () => {
  it('should work with validate errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [ValidateProfileError.NO_DATA],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.NO_DATA]);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
