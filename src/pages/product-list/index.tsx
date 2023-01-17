import { useEffect } from 'react';

import ProductPreview from '../../components/product-preview/ProductPreview';
import Loader from '../../components/loader/Loader';

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
        {status !== LoadingState.IDLE && !value ? (
          <Loader />
        ) : (
          <>
            <CountContainer>
              <CountSubContainer>
                <TextWrapper>
                  1 - 12 of over {value!.length - 50} results for
                  <ProductTitle> Our Products</ProductTitle>
                </TextWrapper>
              </CountSubContainer>
            </CountContainer>
            <ProductsGrid>
              {value?.slice(0, 12).map((product) => (
                <ProductPreview key={product.productId} product={product} />
              ))}
            </ProductsGrid>
          </>
        )}
      </ListContainer>
    </Container>
  );
};

export default ProductListPage;
