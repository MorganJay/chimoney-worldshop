import styled from 'styled-components';

import ProductPrice from '../product-preview/ProductPrice';
import { CurrencyEnum } from '../../types/assets';
import { breakpointMd } from '../../variables.styles';
import { useAppSelector } from '../../app/hooks';
import { selectCartItemsCount } from '../../features/cart/cartSlice';

interface Props {
  totalPrice: number;
}

const Subtotal = ({ totalPrice }: Props) => {
  const count = useAppSelector(selectCartItemsCount);

  return (
    <SubtotalContainer>
      <h2 className="subtotal-label">Subtotal</h2>
      <span className="subtotal-items-count">
        ({count === 1 ? count + ' item' : count + ' items'}):
      </span>
      <span className="price">${totalPrice}</span>
      <ProductPrice price={totalPrice} currency={CurrencyEnum.Empty} checkout />
    </SubtotalContainer>
  );
};

export default Subtotal;

const SubtotalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 4px;
  h2 {
    font-weight: 500;
    font-size: 18px;
  }

  .subtotal-items-count {
    display: none;
  }

  .price {
    display: none;
  }

  @media (min-width: ${breakpointMd}px) {
    .subtotal-items-count,
    .price {
      display: block;
      white-space: nowrap;
      font-size: 18px;
    }

    h2 {
      line-height: 24px;
      font-weight: 400;
    }

    a {
      display: none;
    }

    .price {
      font-weight: 700;
    }
  }
`;
