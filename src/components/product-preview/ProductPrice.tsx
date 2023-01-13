import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ProductCardProps, ProductPreviewProps } from '../../types/productCard';
import { DenominationType } from '../../types/assets';

interface Props extends ProductCardProps, ProductPreviewProps {}

const ProductPrice = ({ product, link, handleClick }: Props) => {
  const {
    denominationType,
    minSenderDenomination,
    maxSenderDenomination,
    fixedSenderDenominations,
  } = product;
  const fixedPrice = fixedSenderDenominations?.at(0) ?? 0;
  return (
    <PriceContainer>
      <PriceSubContainer to={link} role="button" onClick={handleClick}>
        <span className="symbol">$</span>
        {minSenderDenomination?.toLocaleString() ?? fixedPrice}
        <span className="fraction">00</span>
        {denominationType === DenominationType.Range && (
          <>
            <span className="dash">-</span>
            <span className="symbol">$</span>
            {maxSenderDenomination?.toLocaleString() ?? fixedPrice}
            <span className="fraction">00</span>
          </>
        )}
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
