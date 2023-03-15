import ArticleDetails from './ui/ArticleDetails/ArticleDetails';
import { fetchArticleById } from './model/services/fetchArticleById/fetchArticleById';
import {
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError,
} from './model/selectors/articleDetails';
import { articleDetailsReducer } from './model/slice/articleDetailsSlice';
import type { Article, ArticleDetailsSchema } from './model/types/article';

export {
  ArticleDetails,
  fetchArticleById,
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError,
  articleDetailsReducer,
  Article,
  ArticleDetailsSchema,
};
