import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { CartItemProps } from '../cart-item/CartItem';

import { useAppDispatch } from '../../app/hooks';

import { removeItem, addItem } from '../../features/cart/cartSlice';

const ItemQuantityButtons = ({ item, onDelete }: CartItemProps) => {
  const dispatch = useAppDispatch();
  const cartItem = { id: item.productId, quantity: item.quantity };

  const handleDecrement = () => {
    if (item.quantity === 1) {
      onDelete(item);
    } else dispatch(removeItem(cartItem));
  };

  return (
    <>
      <StyledButton title="decrease quantity" onClick={handleDecrement}>
        {item.quantity === 1 ? <DeleteOutlineIcon /> : <RemoveIcon />}
      </StyledButton>
      <StyledSpan>{item.quantity}</StyledSpan>
      <StyledButton
        title="add quantity"
        onClick={() => dispatch(addItem(cartItem))}
      >
        <AddIcon />
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  background-color: #f0f2f2;
  border: none;
  width: 33%;

  &:active {
    border-color: #008296;
    box-shadow: 0 0 0 3px #c8f3fa, inset 0 0 0 2px #fff;
  }
`;

const StyledSpan = styled.span`
  width: 35%;
  background-color: white;
  color: #007185;
`;

export default ItemQuantityButtons;
