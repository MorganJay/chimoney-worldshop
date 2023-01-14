import styled from 'styled-components';

export const Container = styled.div`
  background: #f8f8f8;

  padding: 10px 9px;
  border-radius: 5px;
  padding-left: 10px;
`;

export const ItemContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const Image = styled.img`
  max-height: 170px;
  height: auto;
  mix-blend-mode: multiply;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 0.5rem;
  }

  .name {
    text-overflow: ellipsis;
  }

  .stock {
    color: #007185;
    margin-top: 0.5rem;
  }

  .vendor {
    width: 95%;

    a {
      color: #007185;
    }
  }
`;

export const PriceLogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  div {
    width: auto;
  }
`;

export const CartControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  justify-content: space-between;
  margin-top: 0.4rem;
`;

export const ControlBtn = styled.button`
  border-radius: 10px;
  border: 1px solid #ddd;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  padding: 0 10px 0 11px;
  -webkit-tap-highlight-color: transparent;

  &:active {
    border-color: #008296;
    box-shadow: 0 0 0 3px #c8f3fa, inset 0 0 0 2px #fff;
  }
`;
