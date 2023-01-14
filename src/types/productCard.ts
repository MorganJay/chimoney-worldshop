import { Ecommerce } from './assets';

export interface ProductCardProps {
  link?: string;
  handleClick?: () => void;
}

export interface ProductPreviewProps {
  product: Ecommerce;
}
