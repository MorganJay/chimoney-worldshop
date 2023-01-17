import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { breakpointMd } from '../../variables.styles';

import { selectCartItemsCount } from '../../features/cart/cartSlice';

interface Props {
  isCartEmpty: boolean;
}

const PageHeader = ({ isCartEmpty }: Props) => {
  const isMobileScreenSize = window.innerWidth < breakpointMd;
  return (
    <Header
      style={{
        display: !isMobileScreenSize || isCartEmpty ? 'block' : 'none',
      }}
    >
      <h1>{isCartEmpty ? 'Your Worldshop Cart is empty.' : 'Shopping Cart'}</h1>
      {isCartEmpty ? (
        <span>
          Check your Saved for later items below or{' '}
          <Link to="/">continue shopping.</Link>{' '}
        </span>
      ) : (
        <>
          <span>No items selected. </span>
          <p>Select all items</p>
        </>
      )}
    </Header>
  );
};

export default PageHeader;

const Header = styled.div`
  h1 {
    font-weight: 400;
    line-height: 36px;
  }

  p,
  a {
    color: #007185;
    display: inline;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
      color: #c7511f;
    }
  }
`;
