import { lazy } from 'react';

export default lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // для теста
  setTimeout(() => resolve(import('./MainPage')), 1000);
}));
