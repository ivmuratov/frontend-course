import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  it('should return data', () => {
    const data = {
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
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
