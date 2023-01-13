import styled, { css } from 'styled-components';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import { InputAmountContainer } from './QuantityInput';

export interface AmountPickerProps {
  denominations: number[] | null;
  selectedAmount: number;
  inputtedAmount: string;
  onAmountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAmountListClick: (amount: number) => void;
}

const AmountPicker = ({
  denominations,
  selectedAmount,
  inputtedAmount,
  onAmountChange,
  onAmountListClick,
}: AmountPickerProps) => {
  return (
    <AmountPickerContainer>
      <label htmlFor="">Amount</label>
      <AmountList>
        {denominations?.map((amount, idx) => (
          <li
            key={idx}
            className={selectedAmount === amount ? 'active' : ''}
            onClick={() => onAmountListClick(amount)}
          >
            ${amount}
          </li>
        ))}
        <InputAmountContainer fullWidth>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            placeholder="Enter amount"
            value={inputtedAmount}
            onChange={onAmountChange}
          />
        </InputAmountContainer>
      </AmountList>
    </AmountPickerContainer>
  );
};

export default AmountPicker;

const AmountPickerContainer = styled.div`
  margin: 8px 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
`;

const activeListStyles = css`
  border-color: #e77600;
  font-weight: 700;
  background-color: #fef8f2;
`;

const AmountList = styled.ul`
  padding-left: 20px;
  margin-left: -6px;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  gap: 6px;

  li {
    display: inline-block;
    border-color: #adb1b8 #a2a6ac #8d9096;
    background: #fff;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    padding: 0;
    text-align: center;
    user-select: none;
    min-width: 50px;
    min-height: 31px;
    vertical-align: middle;
    padding: 8px 10px 5px 11px;

    &.active {
      ${activeListStyles}
    }

    &:active,
    &:focus {
      ${activeListStyles}
      box-shadow: 0 0 0 3px #c8f3fa, inset 0 0 0 2px #fff;
    }
  }
`;
