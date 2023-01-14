import styled from 'styled-components';

interface Props {
  img?: string;
  name?: string;
  price?: number;
}

const ProductImage = ({ img, name }: Props) => {
  return (
    <ImageContainer>
      <ImageWrapper>
        <img src={img} alt={name} />
      </ImageWrapper>
      {/* <div>
        <GreetingsContainer>
          <span>
            Hope you enjoy this Worldshop <br />
            Gift Card!
          </span>
        </GreetingsContainer>
        <PreviewContainer>
          <AmountContainer>
            <span>${price ? price.toLocaleString() : '0.00'}</span>
            <p>{name} Gift Card</p>
          </AmountContainer>
        </PreviewContainer>
      </div> */}
    </ImageContainer>
  );
};

export default ProductImage;

const ImageContainer = styled.div`
  width: 30%;
  min-width: 320px;
  /* box-shadow: 0 4px 10px -3px #ddd;
  border: 1px solid #ddd; */
  cursor: pointer;
  border-radius: 7px;
  overflow: hidden;
  max-height: 450px;
`;

const ImageWrapper = styled.div`
  margin-bottom: 8px;
  padding: 0;
  text-align: center;
  img {
    width: 100%;
  }
`;

const GreetingsContainer = styled.div`
  padding: 15px 25px 30px;
  max-height: 100px;
  height: auto;
  word-wrap: break-word;
  overflow: hidden;
  margin-bottom: 0.5rem;
  span {
    font-size: 17px;
    width: 100%;
    line-height: 27px;
  }
`;

const PreviewContainer = styled.div`
  padding: 22px 25px 15px;
  margin-bottom: 8px;
  border-top: 1px solid #ddd;
  border-collapse: separate;
  display: flex;
`;

const AmountContainer = styled.div`
  width: 80%;
  margin-right: 2%;
  min-height: 1px;
  overflow: hidden;
  span {
    font-weight: 700;
    font-size: 28px;
    color: #333;
  }

  p {
    font-size: 15px;
    margin: 5px 0 14px 0;
  }
`;
