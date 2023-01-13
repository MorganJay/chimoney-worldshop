import styled from 'styled-components';

import Button from '../button/Button';

interface Props {
  quantity: number;
  totalPrice: number;
}

const CartCTA = ({ quantity, totalPrice }: Props) => {
  return (
    <CartContainer>
      <p>
        Qty: {quantity} gift cards <br />
        <span>${totalPrice}.00</span>
      </p>
      <Button name="Add to cart" primary>
        Add to cart
      </Button>
      <OrDivider>
        <h5>or</h5>
      </OrDivider>
      <Button name="Buy now" secondary>
        Buy Now
      </Button>
    </CartContainer>
  );
};

export default CartCTA;

const CartContainer = styled.div`
  max-width: 230px;
  width: 30%;
  max-height: 173px;
  border-radius: 8px;
  position: relative;
  border: 1px #d5d9d9 solid;
  padding: 14px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    text-align: center;
    margin-bottom: 16px;
  }

  span {
    font-weight: 700;
    color: #b12704;
  }
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
  h5 {
    background-color: #fff;
    color: #767676;
    display: inline-block;
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
    padding: 0 8px 0 7px;
    position: relative;
    z-index: 2;
  }
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
