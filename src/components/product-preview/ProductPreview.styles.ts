import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  padding: 2px 6px 6px;
  margin-bottom: -2px;
  border-bottom: 2px solid #ddd;
  overflow: hidden;
  height: 585px;

  &:hover {
    .popup-button {
      visibility: visible;
    }
  }
`;

export const SubContainer = styled.div`
  border: 1px solid #f5f5f5;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
  position: relative;
`;

export const CardWrapper = styled.div`
  margin-bottom: 12px;
`;

export const DetailsContainer = styled.div`
  padding: 0 8px;
  margin-bottom: 8px;
`;

export const ProductName = styled.p`
  font-size: 1.143rem;
  margin-top: 8px;
`;
