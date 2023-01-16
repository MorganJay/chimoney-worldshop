import styled from 'styled-components';

import { breakpointMd } from '../../variables.styles';

const RelatedProducts = () => {
  return (
    <RelatedProductsContainer>
      <h1>Products related to items in your cart</h1>
    </RelatedProductsContainer>
  );
};

export default RelatedProducts;

const RelatedProductsContainer = styled.div`
  display: none;
  @media (min-width: ${breakpointMd}px) {
    display: block;
    background-color: white;
  }
`;
