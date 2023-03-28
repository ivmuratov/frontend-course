import ArticleDetails from './ui/ArticleDetails/ArticleDetails';
import { fetchArticleById } from './model/services/fetchArticleById/fetchArticleById';
import {
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError,
} from './model/selectors/articleDetails';
import { articleDetailsReducer } from './model/slice/articleDetailsSlice';
import {
  ArticleView,
  ArticleSortField,
  ArticleType,
} from './model/types/article';
import { ArticleList } from './ui/ArticleList/ArticleList';
import { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector';
import { ArticleSortSelector } from './ui/ArticleSortSelector/ArticleSortSelector';
import { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs';
import type {
  Article,
  ArticleDetailsSchema,
} from './model/types/article';

export {
  ArticleDetails,
  fetchArticleById,
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError,
  articleDetailsReducer,
  ArticleView,
  ArticleList,
  ArticleViewSelector,
  ArticleSortSelector,
  ArticleSortField,
  ArticleTypeTabs,
  Article,
  ArticleType,
  ArticleDetailsSchema,
};
