import styled from 'styled-components';

import CartItem from '../cart-item/CartItem';
import { Divider } from '../product-details/ProductDisplay';

import { borderColor, breakpointLg } from '../../variables.styles';
import { EcommerceCartItem } from '../../types/cart';
import { ItemActionPrompt } from '../../redux/cartPageReducer';

interface Props {
  items: EcommerceCartItem[];
  itemPrompt: ItemActionPrompt | undefined;
  handleDelete: (item: EcommerceCartItem) => void;
  handleSave: (item: EcommerceCartItem) => void;
}

const CartItemList = ({
  itemPrompt,
  items,
  handleDelete,
  handleSave,
}: Props) => {
  return (
    <ItemsContainer>
      {window.innerWidth < breakpointLg ? (
        <Divider />
      ) : items.length || itemPrompt ? (
        <ListHeader>Price</ListHeader>
      ) : null}
      {items.map((item) => (
        <CartItem
          key={item.productId}
          item={item}
          onDelete={handleDelete}
          onSave={handleSave}
        />
      ))}
    </ItemsContainer>
  );
};

export default CartItemList;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 0.7rem;
  hr {
    margin: 1.2rem 0 0;
  }
`;

const ListHeader = styled.div`
  border-bottom: 1px solid ${borderColor};
  text-align: right;
  color: #565959;
`;
