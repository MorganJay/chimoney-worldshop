import { PriceSubContainer } from './ProductPreview.styles';
import {
  ColourPickerContainer,
  PriceContainer,
  ProductName,
  StarsnRatingContainer,
} from './ProductPreview.styles';
import {
  BadgeLabel,
  DetailsContainer,
  ImageContainer,
  InnerBadgeLabel,
} from './ProductPreview.styles';
import {
  Container,
  SubContainer,
  CardWrapper,
  PopupButtonContainer,
  PopupButton,
  BadgeContainer,
  Badge,
} from './ProductPreview.styles';

const ProductPreview = () => {
  return (
    <Container>
      <SubContainer>
        {/* Product container start */}
        <CardWrapper>
          <PopupButtonContainer className="popup-button">
            <PopupButton>
              <div>
                <span />
              </div>
            </PopupButton>
          </PopupButtonContainer>
          {/* Badge */}
          <BadgeContainer>
            <span aria-label='Worldshop"s choice'>
              <a href="">
                <span>
                  <Badge>
                    <BadgeLabel>
                      <InnerBadgeLabel>
                        <span className="first">World's </span>
                        <span className="second">Choice</span>
                      </InnerBadgeLabel>
                    </BadgeLabel>
                  </Badge>
                </span>
              </a>
            </span>
          </BadgeContainer>
          {/* Image */}
          <ImageContainer>
            <span>
              <a href="">
                <div>
                  <img
                    src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81MSnS4nUnL._AC_UL320_.jpg"
                    srcSet="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81MSnS4nUnL._AC_UL320_.jpg 1x, https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81MSnS4nUnL._AC_UL480_QL65_.jpg 1.5x, https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81MSnS4nUnL._AC_UL640_QL65_.jpg 2x, https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81MSnS4nUnL._AC_UL800_QL65_.jpg 2.5x, https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81MSnS4nUnL._AC_UL960_QL65_.jpg 3x"
                    alt="Carhartt Men's Knit Cuffed Beanie"
                  />
                </div>
              </a>
            </span>
          </ImageContainer>

          {/* product details */}
          <DetailsContainer>
            <ColourPickerContainer>Colors</ColourPickerContainer>
            <a href="">
              <ProductName>Carhartt Men's Knit Cuffed Beanie</ProductName>
            </a>
            <StarsnRatingContainer>
              <span aria-label="4.8 out of 5 stars">
                <a href="">
                  <i className="star"></i>
                  <i className="popover"></i>
                </a>
                <span>4.8 </span>
              </span>
              <span aria-label="135,519">
                <a href="">(135,519)</a>
              </span>
            </StarsnRatingContainer>
            <PriceContainer>
              <PriceSubContainer href="/" role="button">
                <span className="symbol">$</span>19
                <span className="fraction">89</span>
                <span className="dash">-</span>
                <span className="symbol">$</span>46
                <span className="fraction">92</span>
              </PriceSubContainer>
            </PriceContainer>
          </DetailsContainer>
        </CardWrapper>
      </SubContainer>
    </Container>
  );
};

export default ProductPreview;
