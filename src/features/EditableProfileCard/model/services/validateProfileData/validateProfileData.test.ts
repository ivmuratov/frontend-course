import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from './validateProfileData';

const data = {
  username: 'admin',
  age: 26,
  first: 'Ivan',
  lastname: 'Muratov',
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Novosibirsk',
};

describe('validateProfileData', () => {
  it('success', () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  it('without first and last name', () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  it('incorrect age', () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  it('incorrect country', () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  it('incorrect all', () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  it('no data', () => {
    const result = validateProfileData(undefined);

    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });
});
