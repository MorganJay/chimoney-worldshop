import styled from 'styled-components';

import Select from './ItemQuantitySelect';
import Buttons from './ItemQuantityButtons';
import { Separator } from '../cart/CartControls';
import { CartItemProps } from '../cart-item/CartItem';

import { breakpointMd } from '../../variables.styles';

const ItemQuantityToggle = ({ item, onDelete }: CartItemProps) => {
  return (
    <Container>
      {window.innerWidth < breakpointMd ? (
        <Buttons item={item} onDelete={onDelete}/>
      ) : (
        <Select item={item} onDelete={onDelete} />
      )}
      <Separator />
    </Container>
  );
};

export default ItemQuantityToggle;

const Container = styled.div`
  display: flex;
  width: 40%;
  max-width: 120px;
  border-radius: 10px;
  border: 1px solid #ddd;
  overflow: hidden;
  box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  user-select: none;
  button,
  span {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
    display: grid;
    place-items: center;
    padding: 0.5em 0;
  }

  @media (min-width: ${breakpointMd}px) {
    border: none;
    background-color: unset;
    box-shadow: none;
    width: unset;
    align-items: center;
    justify-content: flex-start;
  }
`;
