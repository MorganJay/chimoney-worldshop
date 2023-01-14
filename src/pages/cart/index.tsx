import CartItem from '../../components/cart-item/CartItem';
import { Divider } from '../../components/product-details/ProductDisplay';
import ProductPrice from '../../components/product-preview/ProductPrice';

import { CurrencyEnum } from '../../types/assets';

import {
  CheckoutBtn,
  CheckoutContainer,
  CheckoutDivider,
  Container,
  GiftPromptContainer,
  Header,
  ItemsContainer,
  SubContainer,
  SubtotalContainer,
} from './styles';

const CartPage = () => {
  return (
    <Container>
      <SubContainer>
        <CheckoutContainer>
          <SubtotalContainer>
            <h2 className="subtotal-label">Subtotal</h2>
            <span className="subtotal-items-count">(4 items):</span>
            <ProductPrice
              price={3403.29}
              currency={CurrencyEnum.Empty}
              checkout
            />
          </SubtotalContainer>
          <CheckoutBtn name="Checkout" primary>
            Proceed to checkout <span className="items-count">(4 items)</span>
          </CheckoutBtn>
          <CheckoutDivider />
          <GiftPromptContainer>
            <input type="checkbox" name="gift-option" id="gift-option" />
            Send as a gift. Include custom message
          </GiftPromptContainer>
        </CheckoutContainer>
        <Header className="page-title-container">
          <h1>Shopping Cart</h1>
          <p>Select all items</p>
        </Header>
        <ItemsContainer>
          <Divider />
          <CartItem />
          <CartItem />
          <CartItem />
        </ItemsContainer>
      </SubContainer>
    </Container>
  );
};

export default CartPage;
