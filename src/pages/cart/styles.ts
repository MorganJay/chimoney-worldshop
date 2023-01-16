import styled from 'styled-components';

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
    padding-top: 14px;
    min-width: 998px;
  }
`;

export const SubContainer = styled.div`
  padding-top: 18px;
  padding-bottom: 10px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;

  @media (min-width: ${breakpointMd}px) {
    padding: 0;
    align-items: stretch;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    gap: 1rem;
  }
`;

export const CheckoutContainer = styled.div`
  width: 90%;
  @media (min-width: ${breakpointMd}px) {
    order: 2;
    width: 40%;
    max-width: 300px;
    max-height: 739px;
  }
`;

export const CheckoutWrapper = styled.div`
  @media (min-width: ${breakpointMd}px) {
    margin-bottom: 20px;
    background-color: #fff;
    overflow: auto;
    padding: 20px;

    hr {
      display: none;
    }
  }
`;

export const CheckoutDivider = styled(Divider)`
  background-color: #ffd814;
  border-color: #ffd814;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const PageWrapper = styled.div`
  height: 100%;
  @media (min-width: ${breakpointMd}px) {
    order: 1;
    width: 100%;
    display: block;
    background-color: white;
    max-width: 1138px;
    margin-bottom: 20px;
    background-color: #fff;
    overflow: auto;
    padding: 20px 20px 15px;
  }
`;
