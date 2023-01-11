import styled from 'styled-components';

const ProductBadge = () => {
  return (
    <BadgeContainer>
      <span aria-label='Worldshop"s choice'>
        <a href="">
          <span>
            <Badge>
              <BadgeLabel>
                <InnerBadgeLabel>
                  <span className="first">Worldshop's </span>
                  <span className="second">Choice</span>
                </InnerBadgeLabel>
              </BadgeLabel>
            </Badge>
          </span>
        </a>
      </span>
    </BadgeContainer>
  );
};

export default ProductBadge;

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
