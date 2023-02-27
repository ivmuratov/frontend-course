import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/login';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  it('test set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: 'u',
    };

    expect(loginReducer(state as LoginSchema, loginActions.setUsername('user')))
      .toEqual({ username: 'user' });
  });
  it('test set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '123',
    };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('123123')))
      .toEqual({ password: '123123' });
  });
});
