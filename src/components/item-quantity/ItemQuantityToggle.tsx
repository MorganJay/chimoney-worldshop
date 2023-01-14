import styled from 'styled-components';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';

const ItemQuantityToggle = () => {
  return (
    <Container>
      <button title="decrease quantity">
        <DeleteOutlineIcon />
      </button>
      <span>1</span>
      <button title="add quantity">
        <AddIcon />
      </button>
    </Container>
  );
};

export default ItemQuantityToggle;

export const Container = styled.div`
  display: flex;
  width: 40%;
  border-radius: 10px;
  border: 1px solid #ddd;
  overflow: hidden;
  box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  user-select: none;
  button,
  span {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
    display: grid;
    place-items: center;
    padding: 0.5em 0;
  }

  span {
    width: 35%;
    background-color: white;
    color: #007185;
  }

  button {
    background-color: #f0f2f2;
    border: none;
    width: 33%;

    &:active {
      border-color: #008296;
      box-shadow: 0 0 0 3px #c8f3fa, inset 0 0 0 2px #fff;
    }
  }
`;
