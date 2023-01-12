import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ProductRatingProps {
  link: string;
  ratings: number;
}

const ProductRating = ({ link, ratings }: ProductRatingProps) => {
  return (
    <StarsnRatingContainer>
      <span aria-label="4.8 out of 5 stars">
        <Link to={link}>
          <i className="star"></i>
          <i className="popover"></i>
        </Link>
        <span>{(Math.random() * 5).toFixed(1)} </span>
      </span>
      <span aria-label="135,519">
        <Link to="">({ratings.toLocaleString()})</Link>
      </span>
    </StarsnRatingContainer>
  );
};

export default ProductRating;

export const StarsnRatingContainer = styled.div`
  padding-top: 4px;
  margin: 0;
  width: 100%;

  a {
    color: #007185;
  }

  i {
    background-repeat: no-repeat;
    display: inline-block;
  }

  .star {
    background-image: url(https://m.media-amazon.com/images/S/sash/ZNt8quAxIfEMMky.png);
    background-position: -2px -3px;
    background-size: 512px 512px;
    vertical-align: bottom;
    height: 18px;
    width: 80px;
    position: relative;
  }

  .popover {
    background-image: url(https://m.media-amazon.com/images/S/sash/f9Cwl2OUDVHGXk8.png);
    margin: 5px 4px 0 0.385em;
    vertical-align: text-top;
    width: 7px;
    height: 5px;
    background-position: -90px -5px;
    background-size: 400px 900px;
    opacity: 0.6;
  }
`;
