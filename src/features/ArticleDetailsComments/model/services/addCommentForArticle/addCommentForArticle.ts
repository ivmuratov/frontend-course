import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { fetchArticleCommentsById } from '../fetchArticleCommentsById/fetchArticleCommentsById';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetailsComments/addCommentForArticle',
  async (text, thunkApi) => {
    const {
      extra, dispatch, rejectWithValue, getState,
    } = thunkApi;
    try {
      const userData = getUserAuthData(getState());
      const article = getArticleDetailsData(getState());

      if (!userData || !text || !article) {
        return rejectWithValue('no data');
      }

      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text,
      });
      if (!response.data) {
        throw new Error();
      } else {
        dispatch(fetchArticleCommentsById(article.id));
        return response.data;
      }
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
