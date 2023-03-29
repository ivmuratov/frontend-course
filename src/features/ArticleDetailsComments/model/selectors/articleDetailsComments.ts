/* eslint-disable max-len */
import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsCommentsIsLoading = (state: StateSchema) => state.articleDetailsIndex?.comments?.isLoading;

export const getArticleDetailsCommentsError = (state: StateSchema) => state.articleDetailsIndex?.comments?.error;
