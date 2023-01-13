import { GiftCard } from './../types/assets';

export const getProductById = (
  products: GiftCard[],
  id: number
): GiftCard | undefined => {
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === id) {
      return products[i];
    }
  }
};
