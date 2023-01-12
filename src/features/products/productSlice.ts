import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

import { getAssetsAsync } from '../../services/AssetsService';

import { GiftCardsRLD, LoadingState } from '../../types/assets';

export interface ProductsState {
  value: GiftCardsRLD | undefined;
  status: LoadingState;
}

const initialState: ProductsState = {
  value: undefined,
  status: LoadingState.IDLE,
};

export const fetchAssetsAsync = createAsyncThunk(
  'products/fetchAssets',
  async () => {
    const {
      data: { data },
    } = await getAssetsAsync();
    return data.giftCardsRLD;
  }
);

export const productSlice = createSlice({
  initialState,
  name: 'products',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAssetsAsync.pending, (state) => {
        state.status = LoadingState.LOADING;
      })
      .addCase(fetchAssetsAsync.fulfilled, (state, action) => {
        state.status = LoadingState.IDLE;
        state.value = action.payload;
      })
      .addCase(fetchAssetsAsync.rejected, (state) => {
        state.status = LoadingState.FAILED;
      });
  },
});

export const selectProductState = (state: RootState) => state.products;

export default productSlice.reducer;
