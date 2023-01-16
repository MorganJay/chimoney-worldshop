import styled from 'styled-components';
import { breakpointMd, linkColor } from '../../variables.styles';

import ItemQuantityToggle from '../item-quantity/ItemQuantityToggle';

interface Props {
  mobile?: boolean;
}

export const Separator = () => (
  <StyledSeparator
    className="a-icon a-icon-text-separator sc-action-separator"
    role="img"
    aria-label="|"
  />
);

const CartControls = ({ mobile }: Props) => {
  return (
    <CartControlsContainer className={mobile ? 'mobile' : ''}>
      <ItemQuantityToggle />
      <ControlBtn type="button">Delete</ControlBtn>
      <Separator />
      <ControlBtn type="button">Save for later</ControlBtn>
      <Separator />
      <ControlBtn type="button">See more like this</ControlBtn>
    </CartControlsContainer>
  );
};

export default CartControls;

const CartControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  justify-content: space-between;
  margin-top: 0.4rem;

  @media (min-width: ${breakpointMd}px) {
    align-items: center;
    justify-content: flex-start;
    width: 80%;
    margin-top: 0;
  }
`;

const ControlBtn = styled.button`
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

  @media (min-width: ${breakpointMd}px) {
    border: none;
    background-color: unset;
    box-shadow: none;
    font-size: 12px;
    line-height: 16px;
    color: ${linkColor};

    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledSeparator = styled.i`
  background-image: url(https://m.media-amazon.com/images/S/sash/f9Cwl2OUDVHGXk8.png);
  display: none;
  margin: -2px 0.67375em 0;
  width: 1px;
  background-color: #ddd;
  line-height: 0;
  height: 14px;
  vertical-align: middle;
  background-size: 400px 900px;
  background-repeat: no-repeat;

  @media (min-width: ${breakpointMd}px) {
    display: inline-block;
  }
`;
