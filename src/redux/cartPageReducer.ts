import { getCartTotalPrice } from '../features/cart/cartFunctions';
import { EcommerceCartItem } from '../types/cart';

export enum CartPageActions {
  SET_LOADING,
  SET_PRICE,
  SET_ITEMS,
  SET_ITEM_PROMPT,
}

export enum ItemActionPrompt {
  REMOVED = 'was removed from Shopping Cart.',
  SAVED = 'has been moved to Saved for Later.',
}

interface CartPageState {
  loading: boolean;
  totalPrice: number;
  items: EcommerceCartItem[];
  item: EcommerceCartItem | undefined;
  itemPrompt: ItemActionPrompt | undefined;
}

export const initialState: CartPageState = {
  loading: false,
  totalPrice: 0,
  items: [],
  item: undefined,
  itemPrompt: undefined,
};

type CartActions =
  | { type: CartPageActions.SET_LOADING; payload: boolean }
  | { type: CartPageActions.SET_ITEMS; payload: EcommerceCartItem[] }
  | {
      type: CartPageActions.SET_ITEM_PROMPT;
      payload: { item: EcommerceCartItem; itemPrompt: ItemActionPrompt };
    }
  | { type: CartPageActions.SET_PRICE; payload: number };

export default function cartPageReducer(
  state: CartPageState,
  action: CartActions
) {
  const { type, payload } = action;
  switch (type) {
    case CartPageActions.SET_LOADING:
      return {
        ...state,
        loading: payload,
      };

    case CartPageActions.SET_PRICE:
      return {
        ...state,
        totalPrice: payload,
      };

    case CartPageActions.SET_ITEMS:
      return {
        ...state,
        items: payload,
        loading: false,
        totalPrice: getCartTotalPrice(payload),
      };

    case CartPageActions.SET_ITEM_PROMPT:
      return {
        ...state,
        item: payload.item,
        itemPrompt: payload.itemPrompt,
      };

    default:
      return state;
  }
}
