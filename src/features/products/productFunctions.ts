import { GiftCard, Ecommerce } from '../../types/assets';

export const getProductById = (
  products: Ecommerce[],
  id: string
): Ecommerce | undefined => {
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === id) {
      return products[i];
    }
  }
};
