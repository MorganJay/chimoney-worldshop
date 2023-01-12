import styled from 'styled-components';

const NavBar = () => {
  return (
    <StyledNav>
      <TitleContainer>
        <Title>Gift Cards</Title>
        <Title>Welcome, Alice!</Title>
      </TitleContainer>
      <SubTitle>Shop the perfect gift card</SubTitle>
    </StyledNav>
  );
};

export default NavBar;

export const StyledNav = styled.nav`
  margin: 2rem auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  line-height: 2.571rem;
`;

export const SubTitle = styled.p`
  margin: 1rem 0;
`;
