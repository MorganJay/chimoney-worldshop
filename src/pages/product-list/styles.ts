import styled from 'styled-components';

export const Container = styled.div`
  min-height: 1px;
  overflow: visible;
  width: 95%;
  margin: 2rem auto;
`;

export const ListContainer = styled.div`
  position: relative;
`;

export const CountContainer = styled.div`
  margin-bottom: 1.143rem;
`;

export const CountSubContainer = styled.div`
  overflow: auto;
  border: 1px solid #d5d9d9;
  margin: 1.429rem 0;
  border-radius: 8px;
  padding: 1rem 1.286rem;
`;

export const TextWrapper = styled.div`
  padding: 0 1.143rem;
  position: relative;
`;

export const ProductTitle = styled.span`
  color: #c45500;
  font-weight: 700;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, auto));
  place-items: center;
  overflow: hidden;
  gap: 1rem;
`;
