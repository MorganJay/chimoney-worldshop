import PrimeLogo from '../cart/PrimeLogo';
import GiftPrompt from '../cart/GiftPrompt';
import CartControls from '../cart/CartControls';
import ProductPrice from '../product-preview/ProductPrice';

import { EcommerceCartItem } from '../../types/cart';
import { breakpointMd } from '../../variables.styles';

import {
  Container,
  ItemContainer,
  Image,
  NameContainer,
  SelectContainer,
  DetailsContainer,
  PriceLogoContainer,
} from './CartItem.styles';

export interface CartItemProps {
  mobile?: boolean;
  item: EcommerceCartItem;
  onDelete: (item: EcommerceCartItem) => void;
  onSave?: (item: EcommerceCartItem) => void;
}

const CartItem = ({ item, onDelete, onSave }: CartItemProps) => {
  const {
    productId,
    currency,
    marketplace,
    name,
    price,
    quantity,
    thumbnail,
    url,
  } = item;

  return (
    <Container>
      <ItemContainer>
        <SelectContainer>
          <input type="checkbox" name="item-select" id="select-item" />
        </SelectContainer>
        <Image src={thumbnail} alt={name} />
        <DetailsContainer>
          <NameContainer>
            <p>{name}</p>
            <span>${price}</span>
          </NameContainer>
          <PriceLogoContainer>
            <ProductPrice price={price} currency={currency} checkout />
            <PrimeLogo />
          </PriceLogoContainer>
          <p className="stock">In Stock</p>
          <p className="vendor">
            Sold by{' '}
            <a href={url} target="_blank">
              {marketplace}
            </a>{' '}
            and Fufilled By Amazon.ca.
          </p>
          {window.innerWidth > breakpointMd && (
            <>
              <PrimeLogo style={{ marginBottom: 5 }} />
              <GiftPrompt>
                <span style={{ fontSize: 12 }}>This will be a gift</span>{' '}
                <a href="" style={{ fontSize: 12 }}>
                  Learn more
                </a>
              </GiftPrompt>
              <CartControls item={item} onDelete={onDelete} onSave={onSave} />
            </>
          )}
        </DetailsContainer>
      </ItemContainer>
      {window.innerWidth < breakpointMd && (
        <CartControls item={item} onDelete={onDelete} onSave={onSave} mobile />
      )}
    </Container>
  );
};

export default CartItem;
