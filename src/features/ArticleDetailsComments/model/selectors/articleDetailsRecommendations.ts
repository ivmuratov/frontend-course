/* eslint-disable max-len */
import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsRecommendationsIsLoading = (state: StateSchema) => state.articleDetailsIndex?.recommendations?.isLoading;

export const getArticleDetailsRecommendationsError = (state: StateSchema) => state.articleDetailsIndex?.recommendations?.error;
