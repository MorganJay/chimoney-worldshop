import { useEffect, useState } from 'react';

import Subtotal from '../../components/cart/Subtotal';
import GiftPrompt from '../../components/cart/GiftPrompt';
import PageHeader from '../../components/cart/PageHeader';
import CartItemList from '../../components/cart/CartItemList';
import CheckoutButton from '../../components/cart/CheckoutButton';
import SavedItemPrompt from '../../components/cart/SavedItemPrompt';

import { Ecommerce } from '../../types/assets';
import { breakpointMd } from '../../variables.styles';

import { selectStore } from '../../app/store';
import { useAppSelector } from '../../app/hooks';
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
  const { cart, products } = useAppSelector(selectStore);
  const [items, setItems] = useState<Ecommerce[]>([]);

  useEffect(() => {
    if (products.value?.length && cart.cartItems.length) {
      let cartItems: Ecommerce[] = [];
      cart.cartItems.forEach((item) => {
        const cartItem = products.value!.find(({ productId }) => productId === item.id);
        cartItems.push(cartItem!);
      });
      setItems(cartItems);
    }
    console.log('Products not loaded');
  }, []);

  useEffect(() => console.log(items), [items]);

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
          <SavedItemPrompt />
          <CartItemList />
        </PageWrapper>
      </SubContainer>
    </Container>
  );
};

export default CartPage;
