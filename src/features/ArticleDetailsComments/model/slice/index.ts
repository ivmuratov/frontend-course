import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsIndexSchema } from '../types';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendationsSlice';

export const articleDetailsIndexReducer = combineReducers<ArticleDetailsIndexSchema>({
  comments: articleDetailsCommentsReducer,
  recommendations: articleDetailsRecommendationsReducer,
});
