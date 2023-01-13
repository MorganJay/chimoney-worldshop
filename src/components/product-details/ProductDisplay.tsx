import styled, { css } from 'styled-components';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import ProductRating from '../product-preview/ProductRating';

import { ProductPreviewProps } from '../../types/productCard';

interface Props extends ProductPreviewProps {
  quantity: number;
  selectedAmount: number;
  inputtedAmount: string;
  onQuantityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAmountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAmountListClick: (amount: number) => void;
}

const ProductDisplay = ({
  quantity,
  selectedAmount,
  inputtedAmount,
  onQuantityChange,
  onAmountChange,
  onAmountListClick,
  product,
}: Props) => {
  if (!product) return null;

  const {
    name,
    description,
    productId,
    brand,
    redeemInstruction,
    fixedSenderDenominations,
  } = product;

  return (
    <ProductDetailsContainer>
      <ProductTitle>{name} eGift Card</ProductTitle>
      by <ProductBrand>{brand.brandName}</ProductBrand>
      <ProductRating
        link={`/products/${productId}`}
        ratings={brand.brandId || 0}
        detailed
      />
      <Divider />
      <ProductDescription>
        <p>{description}</p>
        <p>{redeemInstruction.verbose}</p>
      </ProductDescription>
      <Divider />
      <h2>Enter your gift card details</h2>
      <br />
      <h4>
        This Gift Card can only be used to purchase eligible goods and services
        available on Worldshop.com, and cannot be used on Worldshop websites in
        other countries.
      </h4>
      <DetailsPicker>
        <AmountPickerContainer>
          <label htmlFor="">Amount</label>
          <AmountListContainer>
            <AmountList>
              {fixedSenderDenominations?.map((amount, idx) => (
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
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  placeholder="Enter amount"
                  value={inputtedAmount}
                  onChange={onAmountChange}
                />
              </InputAmountContainer>
            </AmountList>
          </AmountListContainer>
        </AmountPickerContainer>
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
      </DetailsPicker>
      <Divider />
    </ProductDetailsContainer>
  );
};

export default ProductDisplay;

const ProductDetailsContainer = styled.div`
  max-width: 402px;
`;

const ProductTitle = styled.h1`
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  padding-bottom: 4px;
`;

const ProductBrand = styled.span`
  color: #007185;
`;

const Divider = styled.hr`
  margin-bottom: 16px;
  background-color: transparent;
  border-bottom-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-top: 1px solid #e7e7e7;
  display: block;
  height: 1px;
  line-height: 19px;
  width: 100%;
  margin-top: 22px;
`;

const ProductDescription = styled.div`
  max-width: 100%;
  p {
    margin-bottom: 22px;

    &:first-child {
      font-size: 1.3rem;
    }
  }
`;

const DetailsPicker = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-left: 45px;
  label {
    font-weight: 700;
  }
`;

const AmountPickerContainer = styled.div`
  margin: 8px 0;
  width: 100%;
  display: flex;
  align-items: center;
`;

const AmountListContainer = styled.div`
  padding-left: 14px;
`;

const activeListStyles = css`
  border-color: #e77600;
  font-weight: 700;
  background-color: #fef8f2;
`;

const AmountList = styled.ul`
  padding-left: 6px;
  margin-left: -6px;
  display: flex;
  max-height: 37px;
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

const InputAmountContainer = styled(FormControl)`
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
