import styled from 'styled-components';

import Button from '../../components/button/Button';
import { Divider } from '../../components/product-details/ProductDisplay';

import { breakpointMd } from '../../variables.styles';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 18px 18px;
  margin: 0 auto;
  margin-top: -15px;
  @media (min-width: ${breakpointMd}px) {
    background-color: #eaeded;
  }
`;

export const SubContainer = styled.div`
  padding-top: 18px;
  padding-bottom: 10px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  margin: 0 auto;

  .page-title-container,
  .subtotal-items-count {
    display: none;
  }

  @media (min-width: ${breakpointMd}px) {
    .page-title-container,
    .subtotal-items-count {
      display: initial;
    }
  }
`;

export const CheckoutContainer = styled.div`
  width: 90%;
`;

export const SubtotalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  h2 {
    font-weight: 500;
    font-size: 18px;
  }
`;

export const CheckoutBtn = styled(Button)`
  border-radius: 7px;
`;

export const CheckoutDivider = styled(Divider)`
  background-color: #ffd814;
  border-color: #ffd814;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const GiftPromptContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  input {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`;

export const Header = styled.div``;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 0.7rem;
  hr {
    margin: 1.2rem 0 0;
  }
`;
