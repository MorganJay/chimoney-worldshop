import styled from 'styled-components';
import { Link } from 'react-router-dom';

import CartIcon from '../cart-icon/CartIcon';

const NavBar = () => {
  return (
    <StyledNav>
      <TitleContainer>
        <Title>
          <Link to="/">Gift Cards</Link>
        </Title>
        <NavCartWrapper>
          <Title>Welcome, Alice!</Title>
          <CartIcon />
        </NavCartWrapper>
      </TitleContainer>
      <SubTitle>Shop the perfect gift card</SubTitle>
    </StyledNav>
  );
};

export default NavBar;

export const StyledNav = styled.nav`
  color: white;
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
`;

const NavCartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubTitle = styled.h4`
  padding: 0.5rem;
  background-color: #232f3e;
  margin: 0 0 1rem;
  width: 100%;
`;
