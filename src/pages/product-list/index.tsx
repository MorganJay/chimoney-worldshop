import ProductPreview from '../../components/product-preview/ProductPreview';

import {
  Container,
  ProductTitle,
  ProductsGrid,
  Title,
  SubTitle,
  CountContainer,
  CountSubContainer,
  TextWrapper,
  TitleContainer,
} from './styles';

const ProductListPage = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Gift Cards</Title>
        <Title>Welcome, Alice!</Title>
      </TitleContainer>
      <SubTitle>Shop gift cards</SubTitle>
      <CountContainer>
        <CountSubContainer>
          <TextWrapper>
            <span>1 - 12 of over 80,000 results for</span>{' '}
            <ProductTitle>Gift Cards</ProductTitle>
          </TextWrapper>
        </CountSubContainer>
      </CountContainer>

      <ProductsGrid>
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
      </ProductsGrid>
    </Container>
  );
};

export default ProductListPage;
