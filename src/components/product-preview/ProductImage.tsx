import styled from 'styled-components';

const ProductImage = () => {
  return (
    <ImageContainer>
      <span>
        <a href="">
          <div>
            <img
              src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81MSnS4nUnL._AC_UL320_.jpg"
              alt="Carhartt Men's Knit Cuffed Beanie"
            />
          </div>
        </a>
      </span>
    </ImageContainer>
  );
};

export default ProductImage;

export const ImageContainer = styled.div`
  margin-bottom: 8px;
  padding: 0 8px;
  overflow: hidden;
  text-align: center;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.03;
    pointer-events: none;
  }

  a {
    text-decoration: none;
    color: #007185;
    outline: 0;
    text-align: center;

    div {
      margin-bottom: 0;
      padding-top: 100%;
      position: relative;

      img {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        max-width: 100%;
        max-height: 100%;
        vertical-align: top;
        border: 0;
        text-align: center;
      }
    }
  }
`;
