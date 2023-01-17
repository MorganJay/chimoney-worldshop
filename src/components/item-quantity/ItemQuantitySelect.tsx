import styled from 'styled-components';
import {
  clearSelectedItem,
  addItem,
  setItemQuantity,
} from '../../features/cart/cartSlice';

import { useAppDispatch } from '../../app/hooks';
import { CartItemProps } from '../cart-item/CartItem';

const ItemQuantitySelect = ({ item, onDelete }: CartItemProps) => {
  const dispatch = useAppDispatch();

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = event.target.value;

    if (newQuantity === '0 (Delete)') {
      onDelete(item);
    } else {
      const newItem = { id: item.productId, quantity: +event.target.value };
      dispatch(setItemQuantity(newItem));
    }
  };

  return (
    <StyledSelect
      name="quantity"
      autoComplete="off"
      tabIndex={0}
      value={item.quantity}
      onChange={handleSelect}
    >
      <StyledOption>0 (Delete)</StyledOption>
      {Array.from({ length: 10 }, (_, index) => index + 1).map((value, idx) => (
        <StyledOption key={idx} value={value}>
          {value === item.quantity ? 'Qty: ' : ''}
          {value}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};

export default ItemQuantitySelect;

const StyledSelect = styled.select`
  margin-left: 3px;
  background: #f0f2f2;
  box-shadow: 0 2px 5px rgb(15 17 17 / 15%);
  border-color: #d5d9d9;
  border-radius: 8px;
  color: #0f1111;
  background: #f0f2f2;
  cursor: pointer;
  white-space: nowrap;
  padding: 0 20px 0 11px;
  display: inline-block;
  position: relative;
  font-size: 13px;
  line-height: 29px;
  height: 30px;
  width: 77px;
  padding: 0;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  border-style: solid;
  border-width: 1px;
  border-collapse: collapse;

  &:hover {
    background: #e3e6e6;
  }

  &:active,
  &:focus {
    border-color: #007185;
    box-shadow: 0 0 0 3px #c8f3fa;
    outline: 0;
  }
`;

const StyledOption = styled.option``;
