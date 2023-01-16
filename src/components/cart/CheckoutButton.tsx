import styled from 'styled-components';

import Button from '../button/Button';
import { breakpointMd } from '../../variables.styles';

const CheckoutButton = () => {
  return (
    <CheckoutBtn name="Checkout" primary>
      Proceed to checkout <span className="items-count">(4 items)</span>
    </CheckoutBtn>
  );
};

export default CheckoutButton;

const CheckoutBtn = styled(Button)`
  border-radius: 7px;

  @media (min-width: ${breakpointMd}px) {
    margin-bottom: 14px;

    .items-count {
      display: none;
    }
  }
`;
