import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

enum LoginErrors {
  INCORRECT_DATA,
  SERVER_ERROR,
}

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  'login/loginByusername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8080/login', authData);
      if (!response.data) {
        throw new Error();
      } else {
        localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
        thunkAPI.dispatch(userActions.setAuthData(response.data));
        return response.data;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue('error');
    }
  },
);
