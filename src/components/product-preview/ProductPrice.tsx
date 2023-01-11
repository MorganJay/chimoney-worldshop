import styled from 'styled-components';

const ProductPrice = () => {
  return (
    <PriceContainer>
      <PriceSubContainer href="/" role="button">
        <span className="symbol">$</span>19
        <span className="fraction">89</span>
        <span className="dash">-</span>
        <span className="symbol">$</span>46
        <span className="fraction">92</span>
      </PriceSubContainer>
    </PriceContainer>
  );
};

export default ProductPrice;

export const PriceContainer = styled.div`
  margin-top: 10px;
  width: 100%;
`;

export const PriceSubContainer = styled.a`
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
