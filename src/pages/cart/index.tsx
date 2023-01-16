import Subtotal from '../../components/cart/Subtotal';
import GiftPrompt from '../../components/cart/GiftPrompt';
import PageHeader from '../../components/cart/PageHeader';
import CartItemList from '../../components/cart/CartItemList';
import CheckoutButton from '../../components/cart/CheckoutButton';

import { breakpointMd } from '../../variables.styles';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import {
  CheckoutContainer,
  CheckoutDivider,
  SubContainer,
  PageWrapper,
  Container,
  CheckoutWrapper,
} from './styles';

const CartPage = () => {
  const { width } = useWindowDimensions();
  return (
    <Container>
      <SubContainer>
        <CheckoutContainer>
          <CheckoutWrapper>
            <Subtotal />
            {width >= breakpointMd && (
              <GiftPrompt label="This order contains a gift" />
            )}
            <CheckoutButton />
            <CheckoutDivider />
            {width < breakpointMd && (
              <GiftPrompt label="Send as a gift. Include custom message" />
            )}
          </CheckoutWrapper>
          {/* <RelatedProducts /> */}
        </CheckoutContainer>
        <PageWrapper>
          <PageHeader />
          <CartItemList />
        </PageWrapper>
      </SubContainer>
    </Container>
  );
};

export default CartPage;
