/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaveSchema } from '../types/scrollSave';

const initialState: ScrollSaveSchema = {};

export const scrollSaveSlice = createSlice({
  name: 'scrollSave',
  initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<{ path: string; position: number }>) => {
      state[action.payload.path] = action.payload.position;
    },
  },
});

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;
