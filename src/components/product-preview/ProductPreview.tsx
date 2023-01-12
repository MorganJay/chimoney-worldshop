import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Badge from './Badge';
import Image from './ProductImage';
import Rating from './ProductRating';
import PopupToggle from './MenuPopup';
import Price from './ProductPrice';

import { GiftCard } from '../../types/assets';

interface ProductPreviewProps {
  product: GiftCard;
}

const ProductPreview = ({ product }: ProductPreviewProps) => {
  const { name, img, productId, brand } = product;
  const link = `/products/${name}`;

  return (
    <Container>
      <SubContainer>
        <CardWrapper>
          <PopupToggle />
          <Badge />
          <Image imgUrl={img} link={link} name={name} />
          <DetailsContainer>
            <Link to={link}>
              {/* Color picker? */}
              <ProductName>{name}</ProductName>
            </Link>
            <Rating link={link} ratings={brand.brandId} />
            <Price price={productId} link={link} />
          </DetailsContainer>
        </CardWrapper>
      </SubContainer>
    </Container>
  );
};

export default ProductPreview;

export const Container = styled.div`
  width: 320px;
  padding: 2px 6px 6px;
  margin-bottom: -2px;
  border-bottom: 2px solid #ddd;
  overflow: hidden;

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
  line-height: 24px;
`;
