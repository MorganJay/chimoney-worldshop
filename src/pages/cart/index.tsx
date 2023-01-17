import { useEffect, useState, useReducer } from 'react';

import Loader from '../../components/loader/Loader';
import Subtotal from '../../components/cart/Subtotal';
import GiftPrompt from '../../components/cart/GiftPrompt';
import PageHeader from '../../components/cart/PageHeader';
import CartItemList from '../../components/cart/CartItemList';
import CheckoutButton from '../../components/cart/CheckoutButton';
import SavedItemPrompt from '../../components/cart/SavedItemPrompt';

import { breakpointMd } from '../../variables.styles';

import { selectStore } from '../../app/store';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import { CartItem, EcommerceCartItem } from '../../types/cart';
import {
  fetchCartItemsData,
  getCartTotalPrice,
} from '../../features/cart/cartFunctions';
import { fetchAssetsAsync } from '../../features/products/productSlice';

import {
  CheckoutContainer,
  CheckoutDivider,
  SubContainer,
  PageWrapper,
  Container,
  PageFooter,
  CheckoutWrapper,
} from './styles';

import cartPageReducer, {
  CartPageActions,
  initialState,
  ItemActionPrompt,
} from '../../redux/cartPageReducer';
import { clearSelectedItem } from '../../features/cart/cartSlice';

const CartPage = () => {
  const appDispatch = useAppDispatch();
  const { width } = useWindowDimensions();
  const { cart, products } = useAppSelector(selectStore);
  const [state, dispatch] = useReducer(cartPageReducer, initialState);
  const isProductLoaded = Boolean(products.value?.length);
  const isCartEmpty = cart.cartItems.length === 0;
  const { loading, totalPrice, items, item, itemPrompt } = state;

  const handleCartUIUpdate = () => {
    if (!isCartEmpty) {
      dispatch({ type: CartPageActions.SET_LOADING, payload: true });
      if (isProductLoaded) {
        const cartItems = fetchCartItemsData(cart.cartItems, products.value!);
        dispatch({ type: CartPageActions.SET_ITEMS, payload: cartItems });
      } else {
        appDispatch(fetchAssetsAsync());
      }
    } else {
      dispatch({ type: CartPageActions.SET_ITEMS, payload: [] });
    }
  };

  useEffect(
    () => handleCartUIUpdate(),
    [products.value?.length, cart.cartItems]
  );

  const handleItemDelete = (item: EcommerceCartItem) => {
    dispatch({
      type: CartPageActions.SET_ITEM_PROMPT,
      payload: { item, itemPrompt: ItemActionPrompt.REMOVED },
    });
    appDispatch(
      clearSelectedItem({ id: item.productId, quantity: item.quantity })
    );
  };

  const handleItemSave = (item: EcommerceCartItem) => {
    dispatch({
      type: CartPageActions.SET_ITEM_PROMPT,
      payload: { item, itemPrompt: ItemActionPrompt.SAVED },
    });
  };

  return (
    <Container>
      <SubContainer>
        {loading ? (
          <Loader top="50%" />
        ) : (
          <>
            <CheckoutContainer>
              {!isCartEmpty && (
                <CheckoutWrapper>
                  <Subtotal totalPrice={totalPrice} />
                  {width >= breakpointMd && (
                    <GiftPrompt label="This order contains a gift" />
                  )}
                  <CheckoutButton />
                  <CheckoutDivider />
                  {width < breakpointMd && (
                    <GiftPrompt label="Send as a gift. Include custom message" />
                  )}
                </CheckoutWrapper>
              )}
              {/* <RelatedProducts /> */}
            </CheckoutContainer>
            <PageWrapper>
              <PageHeader isCartEmpty={isCartEmpty} />
              {item && <SavedItemPrompt item={item} itemPrompt={itemPrompt} />}
              <CartItemList
                items={items}
                handleDelete={handleItemDelete}
                handleSave={handleItemSave}
                itemPrompt={itemPrompt}
              />
              <PageFooter>
                <Subtotal totalPrice={totalPrice} />
              </PageFooter>
            </PageWrapper>
          </>
        )}
      </SubContainer>
    </Container>
  );
};

export default CartPage;
