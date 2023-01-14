import ProductPrice from '../product-preview/ProductPrice';

import { CurrencyEnum } from '../../types/assets';

import {
  Container,
  ItemContainer,
  Image,
  DetailsContainer,
  PriceLogoContainer,
  CartControls,
} from './CartItem.styles';
import ItemQuantityToggle from '../item-quantity/ItemQuantityToggle';
import { ControlBtn } from './CartItem.styles';

const CartItem = () => {
  return (
    <Container>
      <ItemContainer>
        <Image
          src="https://m.media-amazon.com/images/I/61iLDQ7-scL._AC_UY327_FMwebp_QL65_.jpg"
          alt=""
        />
        <DetailsContainer>
          <p className="name">
            OBSOT Tiny PTZ 4K Webcam, AI Powered Framing & Autoframing
          </p>
          <PriceLogoContainer>
            <ProductPrice
              price={339.0}
              currency={CurrencyEnum.Empty}
              checkout
            />
            <img
              src="https://m.media-amazon.com/images/G/01/perc/prime-logo.svg"
              width="42"
              height="12"
              alt="Prime"
            />
          </PriceLogoContainer>
          <p className="stock">In Stock</p>
          <p className="vendor">
            Sold by <a href="">REMO TECH US</a> and Fufilled By Amazon.ca.
          </p>
        </DetailsContainer>
      </ItemContainer>
      <CartControls>
        <ItemQuantityToggle />
        <ControlBtn>Delete</ControlBtn>
        <ControlBtn>Save for later</ControlBtn>
      </CartControls>
    </Container>
  );
};

export default CartItem;
