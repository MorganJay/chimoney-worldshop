import { Ecommerce } from './assets';
export interface CartItem {
  id: string;
  quantity: number;
}

export interface EcommerceCartItem extends Ecommerce {
  quantity: number;
}
