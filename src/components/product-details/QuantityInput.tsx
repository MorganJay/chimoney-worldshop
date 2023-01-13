import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';

export interface QuantityInputProps {
  quantity: number;
  onQuantityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const QuantityInput = ({ quantity, onQuantityChange }: QuantityInputProps) => {
  return (
    <QuantityPicker>
      <label htmlFor="quantity-input">Quantity</label>
      <InputAmountContainer>
        <input
          type="text"
          name="quantity"
          id="quantity-input"
          value={quantity}
          onChange={onQuantityChange}
        />
      </InputAmountContainer>
    </QuantityPicker>
  );
};

export default QuantityInput;

const QuantityPicker = styled.div`
  margin: 8px 0;
  width: 100%;
  display: flex;
  gap: 10px;
  padding-bottom: 10px;
  align-items: center;

  input {
    width: 65px;
    background-color: #fff;
    height: 31px;
    padding: 3px 7px;
    transition: all 0.1s linear;
    border: 1px solid #888c8c;
    border-radius: 3px;
    box-shadow: 0 1px 2px rgb(15 17 17 / 15%) inset;
    outline: 0;

    &:focus {
      background-color: #f7feff;
      border-color: #007185;
      box-shadow: 0 0 0 3px #c8f3fa, 0 1px 2px rgb(15 17 17 / 15%) inset;
    }
  }
`;

export const InputAmountContainer = styled(FormControl)`
  max-height: 37px;
  border-width: 1px;
  border-color: #adb1b8 #a2a6ac #8d9096;
  max-width: 137px;
  &:hover {
    outline: none;
  }

  div {
    max-height: 37px;
    &:hover {
      outline: none;
    }
  }
`;
