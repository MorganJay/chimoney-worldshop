import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../app/hooks';
import { selectCartItemsCount } from '../../features/cart/cartSlice';

const CartIcon = () => {
  const count = useAppSelector(selectCartItemsCount);

  return (
    <StyledLink to="/cart" aria-label={`${count} items in cart`} id="nav-cart">
      <CartCountContainer id="nav-cart-count-container">
        <CartCount id="nav-cart-count" aria-hidden="true">
          {count}
        </CartCount>
        <CartIconSprite className="nav-cart-icon nav-sprite" />
      </CartCountContainer>
      <CartTextContainer id="nav-cart-text-container">
        <Line1 aria-hidden="true" className="nav-line-1"></Line1>
        <Line2 aria-hidden="true" className="nav-line-2">
          Cart
          <Arrow className="nav-icon nav-arrow"></Arrow>
        </Line2>
      </CartTextContainer>
    </StyledLink>
  );
};

export default CartIcon;

const StyledLink = styled(Link)`
  padding-left: 9px;
  margin-right: 3px;
  padding-right: 9px;
  height: 50px;
  flex-flow: row nowrap;
  color: #d6d6d6;
  line-height: 44px;
  overflow: hidden;
  align-items: center;
  margin: 0 1px;
  flex-shrink: 0;
  padding: 0 9px 0px 10px;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

const CartCountContainer = styled.div`
  position: relative;
  display: flex;
  float: none;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: flex-start;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CartCount = styled.span`
  left: 15px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  line-height: 16px;
  position: absolute;
  right: auto;
  top: -4px;
  width: 19px;
  color: #f08804;
`;

const CartIconSprite = styled.span`
  width: 41px;
  height: 28px;
  background-position: -218px -337px;
  background-image: url(https://m.media-amazon.com/images/G/01/gno/sprites/nav-sprite-global-2x-hm-dsk-reorg._CB405937547_.png);
  background-size: 350px;
  background-repeat: repeat-x;
  overflow: hidden;
`;

const CartTextContainer = styled.div`
  position: static;
  display: flex;
  float: none;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Line1 = styled.span`
  font-size: 0;
  display: flex;
  position: static;
  float: none;
  align-items: center;
  line-height: 14px;
  height: 14px;
  font-weight: 400;
  white-space: nowrap;
`;

const Line2 = styled.span`
  font-size: 0;
  display: flex;
  position: static;
  float: none;
  align-items: center;
  line-height: 15px;
  height: 14px;
  font-weight: 700;
  white-space: nowrap;
`;

const Arrow = styled.span`
  background-image: url(https://m.media-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405937547_.png);
  background-position: 0 1000px;
  background-repeat: repeat-x;
  display: none;
  margin: 0 0 2px 5px;
  border-top-color: #a7acb2;
  border-style: solid;
  border-width: 4px;
  border-color: transparent;
  border-top: 4px solid #606060;
  border-bottom-width: 0;
  width: 0;
  font-weight: 700;
  color: #fff;
  padding-bottom: 5px;
  height: 0;
  font-size: 0;
  line-height: 0;
  visibility: hidden;
`;
