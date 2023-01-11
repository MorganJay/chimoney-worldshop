import styled from 'styled-components';

const Popup = () => {
  return (
    <PopupButtonContainer className="popup-button">
      <PopupButton>
        <div>
          <span />
        </div>
      </PopupButton>
    </PopupButtonContainer>
  );
};

export default Popup;

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
