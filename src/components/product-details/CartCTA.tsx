import styled from 'styled-components';
import { toast } from 'react-hot-toast';

import Button from '../button/Button';

import { useAppDispatch } from '../../app/hooks';
import { CurrencyEnum } from '../../types/assets';
import { breakpointMd } from '../../variables.styles';

import { addItem } from '../../features/cart/cartSlice';
import { CartItem } from '../../types/cart';

interface Props {
  quantity: number;
  productId: string;
  currency: CurrencyEnum;
  totalPrice: string;
}

const CartCTA = ({ productId, quantity, currency, totalPrice }: Props) => {
  const dispatch = useAppDispatch();

  const handleAddItem = () => {
    const cartItem: CartItem = {
      id: productId,
      quantity,
    };
    dispatch(addItem(cartItem));
    toast.success(`${quantity} item(s) added to your cart`);
  };

  return (
    <CartContainer>
      <CartInfoDisplay>
        Qty: {quantity} item(s) <br />
        <PriceTag>
          {currency}
          {totalPrice}
        </PriceTag>
      </CartInfoDisplay>
      <Button name="Add to cart" onClick={handleAddItem} primary>
        Add to cart
      </Button>
      <OrDivider>
        <OrText>or</OrText>
      </OrDivider>
      <Button name="Buy now" secondary>
        Buy Now
      </Button>
    </CartContainer>
  );
};

export default CartCTA;

const CartContainer = styled.div`
  width: 100%;
  max-width: 402px;
  max-height: 173px;
  border-radius: 8px;
  position: relative;
  border: 1px #d5d9d9 solid;
  padding: 14px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${breakpointMd}px) {
    max-width: 230px;
    width: 30%;
  }
`;

const PriceTag = styled.span`
  font-weight: 700;
  color: #b12704;
`;

const CartInfoDisplay = styled.p`
  text-align: center;
  margin-bottom: 16px;
`;

const OrDivider = styled.div`
  line-height: 0;
  padding-top: 1px;
  position: relative;
  text-align: center;
  top: 2px;
  margin-bottom: 8px;
  margin-top: 4px;
  width: 100%;

  &::after {
    background-color: transparent;
    border-top: 1px solid #e7e7e7;
    content: '';
    display: block;
    height: 1px;
    margin-top: -1px;
    position: absolute;
    top: 50%;
    z-index: 1;
    width: 100%;
  }
`;

const OrText = styled.h5`
  background-color: #fff;
  color: #767676;
  display: inline-block;
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  padding: 0 8px 0 7px;
  position: relative;
  z-index: 2;
`;
