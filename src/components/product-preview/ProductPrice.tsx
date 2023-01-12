import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ProductPriceProps {
  price: number;
  link: string;
}

const ProductPrice = ({ price, link }: ProductPriceProps) => {
  return (
    <PriceContainer>
      <PriceSubContainer to={link} role="button">
        <span className="symbol">$</span>
        {price.toLocaleString()}
        <span className="fraction">00</span>
      </PriceSubContainer>
    </PriceContainer>
  );
};

export default ProductPrice;

export const PriceContainer = styled.div`
  margin-top: 10px;
  width: 100%;
`;

export const PriceSubContainer = styled(Link)`
  display: block;
  user-select: none;
  font-size: 28px;

  .symbol,
  .fraction {
    top: -0.75em;
    font-size: 13px;
    position: relative;
  }

  .dash {
    font-size: 21px;
    padding: 0 4px;
  }
`;
