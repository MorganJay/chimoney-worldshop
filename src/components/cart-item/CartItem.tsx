import PrimeLogo from '../cart/PrimeLogo';
import GiftPrompt from '../cart/GiftPrompt';
import CartControls from '../cart/CartControls';
import ProductPrice from '../product-preview/ProductPrice';

import { CurrencyEnum } from '../../types/assets';
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

const CartItem = () => {
  return (
    <Container>
      <ItemContainer>
        <SelectContainer>
          <input type="checkbox" name="item-select" id="select-item" />
        </SelectContainer>
        <Image
          src="https://m.media-amazon.com/images/I/61iLDQ7-scL._AC_UY327_FMwebp_QL65_.jpg"
          alt=""
        />
        <DetailsContainer>
          <NameContainer>
            <p>
              OBSOT Tiny PTZ 4K Webcam, AI Powered Framing & Autofocus, 4K Video
              Conference Camera with Omni-Directional Mics, Auto Tracking with 2
              axis Gimbal,HDR,60 FPX,Low-Light Correcti...
            </p>
            <span>$339.00</span>
          </NameContainer>
          <PriceLogoContainer>
            <ProductPrice
              price={339.0}
              currency={CurrencyEnum.Empty}
              checkout
            />
            <PrimeLogo />
          </PriceLogoContainer>
          <p className="stock">In Stock</p>
          <p className="vendor">
            Sold by <a href="">REMO TECH US</a> and Fufilled By Amazon.ca.
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
              <CartControls />
            </>
          )}
        </DetailsContainer>
      </ItemContainer>
      {window.innerWidth < breakpointMd && <CartControls mobile />}
    </Container>
  );
};

export default CartItem;
