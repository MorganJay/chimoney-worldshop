import { GiftCard } from './assets';

export interface ProductCardProps {
  link: string;
  handleClick?: () => void;
}

export interface ProductPreviewProps {
  product: GiftCard;
}
