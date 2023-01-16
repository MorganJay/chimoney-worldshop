import styled from 'styled-components';

import ProductPrice from '../product-preview/ProductPrice';
import { CurrencyEnum } from '../../types/assets';
import { breakpointMd } from '../../variables.styles';

const Subtotal = () => {
  return (
    <SubtotalContainer>
      <h2 className="subtotal-label">Subtotal</h2>
      <span className="subtotal-items-count">(4 items):</span>
      <span className="price">$44.95</span>
      <ProductPrice price={3403.29} currency={CurrencyEnum.Empty} checkout />
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
