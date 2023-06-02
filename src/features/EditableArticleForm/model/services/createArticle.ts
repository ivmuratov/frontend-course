import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { CreateArticleForm } from '../types/createArticleForm';

type CreateArticleArg = Omit<CreateArticleForm, 'checkTypeIT' | 'checkTypeScience' | 'checkTypeEconomics'>;

export const createArticle = createAsyncThunk<Article, CreateArticleArg, ThunkConfig<string>>(
  'article/createArticle',
  async (articleForm, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.post<Article>('/articles', articleForm);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
