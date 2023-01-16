import styled from 'styled-components';

import { breakpointMd } from '../../variables.styles';

const PageHeader = () => {
  return (
    <Header>
      <h1>Shopping Cart</h1>
      <span>No items selected. </span>
      <p>Select all items</p>
    </Header>
  );
};

export default PageHeader;

const Header = styled.div`
  display: none;

  h1 {
    font-weight: 400;
    line-height: 36px;
  }

  p {
    color: #007185;
    display: inline;
    &:hover {
      text-decoration: underline;
      text-decoration: underline;
      cursor: pointer;
      color: #c7511f;
    }
  }

  @media (min-width: ${breakpointMd}px) {
    display: block;
  }
`;
