/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CreateArticleFormSchema } from '../types/createArticleForm';
import { ArticleType, ArticleTextBlock, ArticleBlockType, ArticleImageBlock, ArticleCodeBlock } from '@/entities/Article';
import { createArticle } from '../services/createArticle';
import { getRandomID } from '../../lib/helpers/getRandomID';

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
        state.form.type.push(ArticleType.IT);
      } else {
        state.form.type = state.form.type.filter(value => value !== ArticleType.IT);
      }
    },
    setCheckTypeScience: (state, action: PayloadAction<boolean>) => {
      state.form.checkTypeScience = action.payload;
      if (state.form.checkTypeScience) {
        state.form.type.push(ArticleType.SCIENCE);
      } else {
        state.form.type = state.form.type.filter(value => value !== ArticleType.SCIENCE);
      }
    },
    setCheckTypeEconomics: (state, action: PayloadAction<boolean>) => {
      state.form.checkTypeEconomics = action.payload;
      if (state.form.checkTypeEconomics) {
        state.form.type.push(ArticleType.ECONOMICS);
      } else {
        state.form.type = state.form.type.filter(value => value !== ArticleType.ECONOMICS);
      }
    },
    addTextBlock: state => {
      const block: ArticleTextBlock = {
        id: getRandomID(),
        type: ArticleBlockType.TEXT,
        paragraphs: [''],
      };
      state.form.blocks.push(block);
    },
    addImageBlock: state => {
      const block: ArticleImageBlock = {
        id: getRandomID(),
        type: ArticleBlockType.IMAGE,
        src: '',
        title: '',
      };
      state.form.blocks.push(block);
    },
    addCodeBlock: state => {
      const textBlock: ArticleCodeBlock = {
        id: getRandomID(),
        type: ArticleBlockType.CODE,
        code: '',
      };
      state.form.blocks.push(textBlock);
    },
    fillBlockTitle: (state, action: PayloadAction<{ id: number; title: string }>) => {
      const block = state.form.blocks[action.payload.id] as ArticleTextBlock | ArticleImageBlock;
      block.title = action.payload.title;
    },
    fillBlockParagraph: (state, action: PayloadAction<{ id: number; paragraph: string }>) => {
      const block = state.form.blocks[action.payload.id] as ArticleTextBlock;
      block.paragraphs[0] = action.payload.paragraph;
    },
    fillBlockSrc: (state, action: PayloadAction<{ id: number; src: string }>) => {
      const block = state.form.blocks[action.payload.id] as ArticleImageBlock;
      block.src = action.payload.src;
    },
    fillBlockCode: (state, action: PayloadAction<{ id: number; code: string }>) => {
      const block = state.form.blocks[action.payload.id] as ArticleCodeBlock;
      block.code = action.payload.code;
    },
    removeBlock: (state, action: PayloadAction<number>) => {
      state.form.blocks = state.form.blocks.filter((_, index) => index !== action.payload);
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
