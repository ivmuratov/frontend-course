import { lazy } from 'react';

export default lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // для теста
  setTimeout(() => resolve(import('./ArticlesPage')), 1000);
}));
