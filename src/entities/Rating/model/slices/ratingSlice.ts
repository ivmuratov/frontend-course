import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RatingSchema } from '../types/ratingSchema';

const initialState: RatingSchema = {};

export const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    template: (state, action: PayloadAction<string>) => {},
  },
  // extraReducers: (builder) => {
  //     builder
  //         .addCase(, (state) => {
  //             state.error = undefined;
  //             state.isLoading = true;
  //         })
  //         .addCase(, (state) => {
  //             state.isLoading = false;
  //         })
  //         .addCase(, (state, action) => {
  //             state.isLoading = false;
  //             state.error = action.payload;
  //         });
  // },
});

export const { actions: ratingActions } = ratingSlice;
export const { reducer: ratingReducer } = ratingSlice;
