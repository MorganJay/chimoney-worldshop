import CheckoutButton from '../../components/cart/CheckoutButton';
import GiftPrompt from '../../components/cart/GiftPrompt';
import Subtotal from '../../components/cart/Subtotal';
import CartItemList from '../../components/cart/CartItemList';
import PageHeader from '../../components/cart/PageHeader';
import RelatedProducts from '../../components/cart/RelatedProducts';
import { breakpointMd } from '../../variables.styles';

import {
  CheckoutContainer,
  CheckoutDivider,
  SubContainer,
  PageWrapper,
  Container,
  CheckoutWrapper,
} from './styles';

const CartPage = () => {
  return (
    <Container>
      <SubContainer>
        <CheckoutContainer>
          <CheckoutWrapper>
            <Subtotal />
            {window.innerWidth >= breakpointMd && (
              <GiftPrompt label="This order contains a gift" />
            )}
            <CheckoutButton />
            <CheckoutDivider />
            {window.innerWidth < breakpointMd && (
              <GiftPrompt label="Send as a gift. Include custom message" />
            )}
          </CheckoutWrapper>
          <RelatedProducts />
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
