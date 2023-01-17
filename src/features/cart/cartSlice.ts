import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { CartItem } from '../../types/cart';
import {
  addItemToCart,
  removeItemFromCart,
  updateItemInCart,
} from './cartFunctions';

export interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.cartItems = addItemToCart(action.payload, state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    },
    clearSelectedItem: (state, action: PayloadAction<CartItem>) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
    setItemQuantity: (state, action: PayloadAction<CartItem>) => {
      state.cartItems = updateItemInCart(state.cartItems, action.payload);
    },
  },
});

export const {
  addItem,
  clearCart,
  removeItem,
  clearSelectedItem,
  setItemQuantity,
} = cartSlice.actions;

export const selectCartState = (state: RootState) => state.cart;

export const selectCartItemsCount = (state: RootState) =>
  state.cart.cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

export default cartSlice.reducer;
