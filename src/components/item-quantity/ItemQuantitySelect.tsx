import { useState } from 'react';
import styled from 'styled-components';

const ItemQuantitySelect = () => {
  const [quantity, setQuantity] = useState<number | undefined>(1);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(+event.target.value);
  };

  return (
    <StyledSelect
      name="quantity"
      autoComplete="off"
      tabIndex={0}
      value={quantity}
      onChange={handleSelect}
      //onClick={() => setQuantity(undefined)}
      //onFocus={() => setQuantity(undefined)}
    >
      <StyledOption>0 (Delete)</StyledOption>
      {Array.from({ length: 10 }, (_, index) => index + 1).map((value, idx) => (
        <StyledOption key={idx} value={value}>
          {value === quantity ? 'Qty: ' : ''}
          {value}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};

export default ItemQuantitySelect;

const StyledSelect = styled.select`
  margin-left: 3px;
  background: #f0f2f2;
  box-shadow: 0 2px 5px rgb(15 17 17 / 15%);
  border-color: #d5d9d9;
  border-radius: 8px;
  color: #0f1111;
  background: #f0f2f2;
  cursor: pointer;
  white-space: nowrap;
  padding: 0 20px 0 11px;
  display: inline-block;
  position: relative;
  font-size: 13px;
  line-height: 29px;
  height: 30px;
  width: 77px;
  padding: 0;
  text-align: center;
  text-decoration: none !important;
  vertical-align: middle;
  border-style: solid;
  border-width: 1px;
  border-collapse: collapse;

  &:hover {
    background: #e3e6e6;
  }

  &:active,
  &:focus {
    border-color: #007185;
    box-shadow: 0 0 0 3px #c8f3fa;
    outline: 0;
  }
`;

const StyledOption = styled.option`
  .label {
    display: none;
    opacity: 0;
    background-color: red;
  }

  /* .selected {
    span {
      display: inline;
    }
  } */
`;
