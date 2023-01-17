import styled from 'styled-components';

import { breakpointMd, linkColor } from '../../variables.styles';

export const Container = styled.div`
  background: #f8f8f8;
  padding: 10px 9px;
  border-radius: 5px;
  padding-left: 10px;

  @media (min-width: ${breakpointMd}px) {
    background-color: white;
    border-bottom: 1px solid #e7e7e7;
    position: relative;
    margin-top: 12px;
  }
`;

export const ItemContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  @media (min-width: ${breakpointMd}px) {
    gap: 12px;
    justify-content: flex-start;
  }
`;

export const SelectContainer = styled.div`
  display: none;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 8px;
  input {
    height: 16px;
    width: 16px;
    padding-left: 19px;
  }
  @media (min-width: ${breakpointMd}px) {
    display: flex;
  }
`;

export const Image = styled.img`
  max-height: 170px;
  mix-blend-mode: multiply;
  object-fit: cover;
  max-width: 180px;
  /* align-self: center; */

  @media (min-width: ${breakpointMd}px) {
    max-height: 180px;
    margin-bottom: 4px;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 0.5rem;
  }

  .stock {
    color: #007185;
    margin-top: 0.5rem;
  }

  .vendor {
    width: 95%;
    a {
      color: #007185;
    }
  }

  @media (min-width: ${breakpointMd}px) {
    flex-shrink: 1;
    flex-grow: 1;
    .name {
      margin-bottom: 12px;
    }
    .stock {
      color: #007600;
      margin: 0;
      font-size: 12px;
    }
    .vendor {
      font-size: 12px;
      margin-bottom: 5px;
    }
  }
`;

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  p {
    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 65px;
  }
  span {
    display: none;
  }

  @media (min-width: ${breakpointMd}px) {
    p {
      max-width: 500px;
    }
    span {
      display: block;
      font-weight: 700;
      font-size: 18px;
    }
  }
`;

export const PriceLogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  div {
    width: auto;
  }

  @media (min-width: ${breakpointMd}px) {
    display: none;
  }
`;

export const CartControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  justify-content: space-between;
  margin-top: 0.4rem;
`;

export const ControlBtn = styled.button`
  border-radius: 10px;
  border: 1px solid #ddd;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  padding: 0 10px 0 11px;
  -webkit-tap-highlight-color: transparent;

  &:active {
    border-color: #008296;
    box-shadow: 0 0 0 3px #c8f3fa, inset 0 0 0 2px #fff;
  }
`;
