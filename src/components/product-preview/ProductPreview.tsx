import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Badge from './Badge';
import Image from './ProductImage';
import Price from './ProductPrice';
import Rating from './ProductRating';
import PopupToggle from './MenuPopup';

import { useAppDispatch } from '../../app/hooks';
import { selectProduct } from '../../features/products/productSlice';
import { ProductPreviewProps } from '../../types/productCard';

const ProductPreview = ({ product }: ProductPreviewProps) => {
  const dispatch = useAppDispatch();
  const { name, thumbnail, productId, marketplace, position } = product;
  const link = `/products/${productId}`;

  return (
    <Container>
      <SubContainer>
        <CardWrapper>
          <PopupToggle />
          <Badge />
          <Image
            imgUrl={thumbnail}
            link={link}
            name={name}
            handleClick={() => dispatch(selectProduct(product))}
          />
          <DetailsContainer>
            <Link to={link} onClick={() => dispatch(selectProduct(product))}>
              {/* Color picker? */}
              <ProductName>{name}</ProductName>
            </Link>
            <Rating
              link={link}
              ratings={position}
              handleClick={() => dispatch(selectProduct(product))}
            />
            <Price
              product={product}
              link={link}
              handleClick={() => dispatch(selectProduct(product))}
            />
          </DetailsContainer>
        </CardWrapper>
      </SubContainer>
    </Container>
  );
};

export default ProductPreview;

export const Container = styled.div`
  width: 300px;
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
  min-height: 500px;
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
