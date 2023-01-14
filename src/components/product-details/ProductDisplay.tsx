import styled, { css } from 'styled-components';

import ProductRating from '../product-preview/ProductRating';

import QuantityInput from './QuantityInput';
import { QuantityInputProps } from './QuantityInput';
import { ProductPreviewProps } from '../../types/productCard';

interface Props extends ProductPreviewProps, QuantityInputProps {}

const ProductDisplay = ({ quantity, onQuantityChange, product }: Props) => {
  if (!product) return null;

  const {
    currency,
    price,
    name,
    position,
    category,
    url,
    productId,
    marketplace,
  } = product;

  return (
    <ProductDetailsContainer>
      <ProductTitle>{name}</ProductTitle>
      by <ProductBrand>{marketplace}</ProductBrand>
      <ProductRating
        link={`/products/${productId}`}
        ratings={position}
        detailed
      />
      <Divider />
      <ProductDescription>
        <h2>
          {currency}
          {price}
        </h2>
        <p>{category}</p>
        <a href={url} target="_blank">
          <p>view product on {marketplace}</p>
        </a>
      </ProductDescription>
      <Divider />
      {/* <h2>Enter your gift card details</h2>
      <br />
      <h4>
        This Gift Card can only be used to purchase eligible goods and services
        available on Worldshop.com, and cannot be used on Worldshop websites in
        other countries.
      </h4> */}
      <DetailsPicker>
        {/* <AmountPicker
          denominations={fixedSenderDenominations}
          inputtedAmount={inputtedAmount}
          onAmountChange={onAmountChange}
          onAmountListClick={onAmountListClick}
          selectedAmount={selectedAmount}
        /> */}
        <QuantityInput
          quantity={quantity}
          onQuantityChange={onQuantityChange}
        />
      </DetailsPicker>
      <Divider />
    </ProductDetailsContainer>
  );
};

export default ProductDisplay;

const ProductDetailsContainer = styled.div`
  max-width: 402px;
  max-height: 880px;
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
  h2 {
    margin-bottom: 20px;
  }
  a {
    color: #007185;
  }

  p {
    overflow: hidden;
    margin-bottom: 22px;
    max-height: 200px;
    text-overflow: ellipsis;
    text-transform: capitalize;

    &:first-child {
      font-size: 1.3rem;
    }
  }
`;

const DetailsPicker = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  label {
    font-weight: 700;
  }
`;
