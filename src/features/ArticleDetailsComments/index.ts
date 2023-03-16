import {
  articleDetailsCommentsReducer,
  getArticleDetailsComments,
} from './model/slice/articleDetailsCommentsSlice';
import {
  getArticleDetailsCommentsIsLoading,
  getArticleDetailsCommentsError,
} from './model/selectors/articleDetailsComments';
import {
  fetchArticleCommentsById,
} from './model/services/fetchArticleCommentsById/fetchArticleCommentsById';
import type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';

export {
  articleDetailsCommentsReducer,
  getArticleDetailsComments,
  getArticleDetailsCommentsIsLoading,
  getArticleDetailsCommentsError,
  fetchArticleCommentsById,
  ArticleDetailsCommentsSchema,
};
