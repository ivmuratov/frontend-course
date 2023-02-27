import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  it('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'username',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('username');
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
