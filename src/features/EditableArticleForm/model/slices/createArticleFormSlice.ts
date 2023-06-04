/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CreateArticleFormSchema } from '../types/createArticleForm';
import { ArticleBlock, ArticleType } from '@/entities/Article';
import { createArticle } from '../services/createArticle';

const initialState: CreateArticleFormSchema = {
  form: {
    title: '',
    subtitle: '',
    img: '',
    checkTypeIT: false,
    checkTypeScience: false,
    checkTypeEconomics: false,
    type: [],
    blocks: [],
  },
  error: undefined,
  isLoading: false,
};

export const createArticleFormSlice = createSlice({
  name: 'createArticleForm',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.form.title = action.payload;
    },
    setSubtitle: (state, action: PayloadAction<string>) => {
      state.form.subtitle = action.payload;
    },
    setImg: (state, action: PayloadAction<string>) => {
      state.form.img = action.payload;
    },
    setCheckTypeIT: (state, action: PayloadAction<boolean>) => {
      state.form.checkTypeIT = action.payload;
      if (state.form.checkTypeIT) {
        state.form.type = [...state.form.type, ArticleType.IT];
      } else {
        state.form.type = state.form.type.filter(value => value !== ArticleType.IT);
      }
    },
    setCheckTypeScience: (state, action: PayloadAction<boolean>) => {
      state.form.checkTypeScience = action.payload;
      if (state.form.checkTypeScience) {
        state.form.type = [...state.form.type, ArticleType.SCIENCE];
      } else {
        state.form.type = state.form.type.filter(value => value !== ArticleType.SCIENCE);
      }
    },
    setCheckTypeEconomics: (state, action: PayloadAction<boolean>) => {
      state.form.checkTypeEconomics = action.payload;
      if (state.form.checkTypeEconomics) {
        state.form.type = [...state.form.type, ArticleType.ECONOMICS];
      } else {
        state.form.type = state.form.type.filter(value => value !== ArticleType.ECONOMICS);
      }
    },
    setBlock: (state, action: PayloadAction<ArticleBlock>) => {
      state.form.blocks = [...state.form.blocks, action.payload];
    },
    clearBlock: state => {
      state.form.blocks = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createArticle.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(createArticle.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(createArticle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: createArticleFormActions } = createArticleFormSlice;
export const { reducer: createArticleFormReducer } = createArticleFormSlice;
