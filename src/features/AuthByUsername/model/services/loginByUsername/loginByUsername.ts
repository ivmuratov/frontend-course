import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';

enum LoginErrors {
  INCORRECT_DATA,
  SERVER_ERROR,
}

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByusername',
  async (authData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.post<User>('/login', authData);
      if (!response.data) {
        throw new Error();
      } else {
        localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
        dispatch(userActions.setAuthData(response.data));
        return response.data;
      }
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
