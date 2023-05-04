import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';

export const $api = axios.create({
  baseURL: __API__,
});

$api.interceptors.request.use(config => {
  if (config.headers) {
    // eslint-disable-next-line no-param-reassign
    config.headers.authorization = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '';
  }
  return config;
});
