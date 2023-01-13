import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import ProductPreview from '../../components/product-preview/ProductPreview';

import { LoadingState } from '../../types/assets';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  fetchAssetsAsync,
  selectProductState,
} from '../../features/products/productSlice';

import {
  Container,
  ProductTitle,
  ProductsGrid,
  ListContainer,
  CountContainer,
  CountSubContainer,
  TextWrapper,
} from './styles';

const ProductListPage = () => {
  const dispatch = useAppDispatch();
  const { status, value } = useAppSelector(selectProductState);

  // TODO: Add state and button for viewing all products

  useEffect(() => {
    if (!value) dispatch(fetchAssetsAsync());
  }, []);

  return (
    <Container>
      <ListContainer>
        {status !== LoadingState.IDLE ? (
          <CircularProgress
            size={50}
            sx={{
              position: 'absolute',
              top: 200,
              left: 0,
              color: '#c45500',
              right: 0,
              margin: 'auto',
            }}
          />
        ) : (
          <>
            <CountContainer>
              <CountSubContainer>
                <TextWrapper>
                  1 - 12 of over 100 results for
                  <ProductTitle> Gift Cards</ProductTitle>
                </TextWrapper>
              </CountSubContainer>
            </CountContainer>
            <ProductsGrid>
              {value?.content.slice(0, 12).map((giftCard) => (
                <ProductPreview key={giftCard.productId} product={giftCard} />
              ))}
            </ProductsGrid>
          </>
        )}
      </ListContainer>
    </Container>
  );
};

export default ProductListPage;
