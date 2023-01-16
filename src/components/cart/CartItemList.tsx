import styled from 'styled-components';
import { Link } from 'react-router-dom';

import CartItem from '../cart-item/CartItem';
import { Divider } from '../product-details/ProductDisplay';
import { borderColor, linkColor, breakpointLg } from '../../variables.styles';

const CartItemList = () => {
  return (
    <ItemsContainer>
      {window.innerWidth < breakpointLg ? (
        <Divider />
      ) : (
        <ListHeader>Price</ListHeader>
      )}
      <SavedItemPromptContainer>
        <SavedItemMessageContainer>
          <SavedItemMessage>
            <SavedItemLink to="">
              fireCable Wireless USB Cable for Powering Fire TV Stick or
              Fires...
            </SavedItemLink>{' '}
            has been moved to Saved for Later.
          </SavedItemMessage>
        </SavedItemMessageContainer>
      </SavedItemPromptContainer>
      <CartItem />
      <CartItem />
      <CartItem />
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

const SavedItemPromptContainer = styled.div`
  padding: 0.857rem 0 0.857rem 0.857rem;
  border-bottom: 1px solid #e7e7e7;
`;

const SavedItemMessageContainer = styled.div`
  padding: 1rem 1.286rem;
`;

const SavedItemMessage = styled.span`
  line-height: 1.429rem;
`;

const SavedItemLink = styled(Link)`
  color: ${linkColor};
`;
