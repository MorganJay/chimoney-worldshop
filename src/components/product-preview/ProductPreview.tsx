import Badge from './Badge';
import Image from './ProductImage';
import Rating from './ProductRating';
import PopupToggle from './MenuPopup';
import Price from './ProductPrice';

import {
  ProductName,
  DetailsContainer,
  Container,
  SubContainer,
  CardWrapper,
} from './ProductPreview.styles';

const ProductPreview = () => {
  return (
    <Container>
      <SubContainer>
        <CardWrapper>
          <PopupToggle />
          <Badge />
          <Image />
          <DetailsContainer>
            <a href="">
              {/* Color picker? */}
              <ProductName>Gift Card Una</ProductName>
            </a>
            <Rating />
            <Price />
          </DetailsContainer>
        </CardWrapper>
      </SubContainer>
    </Container>
  );
};

export default ProductPreview;
