import { Ecommerce } from '../../types/assets';
import { EcommerceCartItem, CartItem } from '../../types/cart';

export const addItemToCart = (
  cartItemToAdd: CartItem,
  cartItems: CartItem[]
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const fetchCartItemsData = (
  cartItemsState: CartItem[],
  products: Ecommerce[]
): EcommerceCartItem[] => {
  let cartItems: EcommerceCartItem[] = [];
  cartItemsState.forEach((item) => {
    const cartItem = products!.find(({ productId }) => productId === item.id);
    if (cartItem)
      cartItems.push({
        ...cartItem,
        quantity: item.quantity,
      });
  });
  return cartItems;
};

export const getCartTotalPrice = (cartItems: EcommerceCartItem[]): number => {
  return cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price!,
    0
  );
};

export const updateItemInCart = (
  cartItems: CartItem[],
  cartItemToUpdate: CartItem
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToUpdate.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToUpdate.id
        ? { ...cartItem, quantity: cartItemToUpdate.quantity }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToUpdate }];
};
