import styled from 'styled-components';
import { Link } from 'react-router-dom';

import CartIcon from '../cart-icon/CartIcon';
import { primaryColor, breakpointMd } from '../../variables.styles';

const NavBar = () => {
  return (
    <StyledNav>
      <TitleContainer>
        <Link to="/">
          <Title>Worldshop Products</Title>
        </Link>
        <NavCartWrapper>
          <h1>Welcome, Alice!</h1>
          <CartIcon />
        </NavCartWrapper>
      </TitleContainer>
      <SubTitle>Get your best deal today</SubTitle>
    </StyledNav>
  );
};

export default NavBar;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleContainer = styled.div`
  background-color: #131921;
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  line-height: 2.571rem;
  color: ${primaryColor};
`;

const NavCartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: white;
    font-size: 1.8rem;
    line-height: 2.571rem;
    display: none;

    @media (min-width: ${breakpointMd}px) {
      display: block;
    }
  }
`;

export const SubTitle = styled.h4`
  padding: 0.5rem;
  color: white;
  background-color: #232f3e;
  margin: 0 0 1rem;
  width: 100%;
`;
