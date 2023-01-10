import styled from 'styled-components';

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

export const PopupButtonContainer = styled.span`
  position: absolute;
  visibility: hidden;
  right: 0;
  top: 0;
`;

export const PopupButton = styled.button`
  position: relative;
  background-color: transparent;
  border: 0;
  outline: 0;
  padding: 0;
  width: 48px;
  height: 48px;
  z-index: 1;
  border-radius: 24px;

  div {
    width: 32px;
    height: 32px;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 0 4px 0 rgb(17 17 17 / 30%);
    opacity: 0.75;
  }

  span {
    width: 27px;
    height: 27px;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(https://m.media-amazon.com/images/S/sash/5aLIN-E4aAwITJG.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const BadgeContainer = styled.div`
  position: relative;
  padding-bottom: 2px;
  overflow: hidden;
  height: 100%;
  background: #f8f8f8;

  a {
    color: #007185;
  }
`;

export const Badge = styled.span`
  display: inline-block;
`;

export const BadgeLabel = styled.span`
  max-width: 160px;
  padding: 0 6px 0 10px;
  background-color: #002f36;
  color: #002f36;
  padding: 0 6px 0 10px;
  position: relative;
  height: 26px;
  z-index: 1;
  float: left;

  &::after {
    content: '';
    width: 10px;
    height: 26px;
    border-right: 10px solid transparent;
    border-top: 26px solid;
    position: absolute;
    top: 0;
    right: -15px;
  }
`;

export const InnerBadgeLabel = styled.span`
  font-size: 12px;
  color: #fff;
  line-height: 26px;
  height: 26px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: block;
  max-width: 130px;

  .first {
    color: #fff;
  }

  .second {
    color: #f69931;
  }
`;

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

export const DetailsContainer = styled.div`
  padding: 0 8px;
  margin-bottom: 8px;
`;

export const ColourPickerContainer = styled.div`
  text-align: center;
  margin-bottom: 0;
`;

export const ProductName = styled.p`
  font-size: 1.143rem;
  margin-top: 8px;
`;

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
    background-position: -2px -2px;
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

export const PriceContainer = styled.div`
  margin-top: 10px;
  width: 100%;
`;

export const PriceSubContainer = styled.a`
  display: block;
  user-select: none;
  font-size: 28px;

  .symbol,
  .fraction {
    top: -0.75em;
    font-size: 13px;
    position: relative;
  }

  .dash {
    font-size: 21px;
    padding: 0 4px;
  }
`;
