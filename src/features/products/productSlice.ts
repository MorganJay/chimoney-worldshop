import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

import { getAssetsAsync } from '../../services/AssetsService';

import { GiftCard, GiftCardsRLD, LoadingState } from '../../types/assets';
import { getProductById } from '../../utils/productFunctions';

export interface ProductsState {
  value: GiftCardsRLD | undefined;
  status: LoadingState;
  selectedProduct: GiftCard | undefined;
}

const initialState: ProductsState = {
  value: undefined,
  status: LoadingState.IDLE,
  selectedProduct: undefined,
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
  reducers: {
    selectProduct: (state, action: PayloadAction<GiftCard>) => {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = undefined;
    },
    filterAndSetSelectedProduct: (state, action: PayloadAction<number>) => {
      state.selectedProduct = getProductById(
        state.value!.content,
        action.payload
      );
    },
  },
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

export const {
  selectProduct,
  clearSelectedProduct,
  filterAndSetSelectedProduct,
} = productSlice.actions;

export const selectProductState = (state: RootState) => state.products;

export default productSlice.reducer;
