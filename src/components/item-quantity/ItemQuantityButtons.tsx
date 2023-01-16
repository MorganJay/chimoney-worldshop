import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const ItemQuantityButtons = () => {
  return (
    <>
      <StyledButton title="decrease quantity">
        <DeleteOutlineIcon />
      </StyledButton>
      <StyledSpan>1</StyledSpan>
      <StyledButton title="add quantity">
        <AddIcon />
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  background-color: #f0f2f2;
  border: none;
  width: 33%;

  &:active {
    border-color: #008296;
    box-shadow: 0 0 0 3px #c8f3fa, inset 0 0 0 2px #fff;
  }
`;

const StyledSpan = styled.span`
  width: 35%;
  background-color: white;
  color: #007185;
`;

export default ItemQuantityButtons;
