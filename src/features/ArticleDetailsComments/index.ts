import {
  getArticleDetailsComments,
} from './model/slice/articleDetailsCommentsSlice';
import {
  getArticleDetailsCommentsIsLoading,
  getArticleDetailsCommentsError,
} from './model/selectors/articleDetailsComments';
import {
  fetchArticleCommentsById,
} from './model/services/fetchArticleCommentsById/fetchArticleCommentsById';
import { addCommentForArticle } from './model/services/addCommentForArticle/addCommentForArticle';
import {
  getArticleDetailsRecommendations,
} from './model/slice/articleDetailsRecommendationsSlice';
import { getArticleDetailsRecommendationsIsLoading } from './model/selectors/articleDetailsRecommendations';
import { fetchArticleRecommendations } from './model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsIndexReducer } from './model/slice';
import type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
import type { ArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendationsSchema';
import type { ArticleDetailsIndexSchema } from './model/types';

export {
  getArticleDetailsComments,
  getArticleDetailsCommentsIsLoading,
  getArticleDetailsCommentsError,
  fetchArticleCommentsById,
  addCommentForArticle,
  getArticleDetailsRecommendations,
  getArticleDetailsRecommendationsIsLoading,
  fetchArticleRecommendations,
  articleDetailsIndexReducer,
  ArticleDetailsCommentsSchema,
  ArticleDetailsRecommendationsSchema,
  ArticleDetailsIndexSchema,
};
