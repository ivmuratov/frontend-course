import ArticlesPageAsync from './ui/ArticlesPage/ArticlesPage.async';
import { articlesPageReducer } from '../../pages/ArticlesPage/model/slices/articlesPageSlice';
import type { ArticlesPageSchema } from './model/types/articlesPageSchema';

export {
  ArticlesPageAsync as ArticlesPage,
  articlesPageReducer,
  ArticlesPageSchema,
};
