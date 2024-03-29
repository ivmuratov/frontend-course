/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import type { Article, ArticleDetailsSchema } from '../types/article';

const initialState: ArticleDetailsSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {
    testAction: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchArticleById.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
