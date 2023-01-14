import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

import { getAssetsAsync } from '../../services/AssetsService';

import { Ecommerce, LoadingState } from '../../types/assets';
import { getProductById } from './productFunctions';

export interface ProductsState {
  value: Ecommerce[] | undefined;
  status: LoadingState;
  selectedProduct: Ecommerce | undefined;
}

const initialState: ProductsState = {
  value: undefined,
  status: LoadingState.LOADING,
  selectedProduct: undefined,
};

export const fetchAssetsAsync = createAsyncThunk(
  'products/fetchAssets',
  async () => {
    const {
      data: { data },
    } = await getAssetsAsync();

    return data.ecommerce; // Ecommerce or giftCardsRLD
  }
);

export const productSlice = createSlice({
  initialState,
  name: 'products',
  reducers: {
    selectProduct: (state, action: PayloadAction<Ecommerce>) => {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = undefined;
    },
    filterAndSetSelectedProduct: (state, action: PayloadAction<string>) => {
      state.selectedProduct = getProductById(state.value!, action.payload);
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
