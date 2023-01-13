import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import {
  selectProductState,
  fetchAssetsAsync,
  filterAndSetSelectedProduct,
} from '../../features/products/productSlice';

import CartCTA from '../../components/product-details/CartCTA';
import ProductCard from '../../components/product-details/ProductCard';
import ProductDisplay from '../../components/product-details/ProductDisplay';

import { Container } from './styles';

const ProductDetailPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { selectedProduct, value } = useAppSelector(selectProductState);
  const [selectedAmount, setSelectedAmount] = useState<number>(0);
  const [inputtedAmount, setInputtedAmount] = useState('');
  const [quantity, setQuantity] = useState<number>(1);

  const totalPrice = quantity * selectedAmount;

  const handleQuantityInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setQuantity(+event.target.value);

  const handleAmountInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputtedAmount(event.target.value);
    setSelectedAmount(+event.target.value);
  };

  const handleAmountListClick = (amount: number) => {
    setInputtedAmount('');
    setSelectedAmount(amount);
  };

  useEffect(() => {
    if (!selectedProduct) {
      dispatch(fetchAssetsAsync());
    }
  }, []);

  useEffect(() => {
    if (value?.content.length) {
      dispatch(filterAndSetSelectedProduct(Number(id)));
    }
  }, [value?.content.length]);

  useEffect(() => {
    const price =
      selectedProduct?.minSenderDenomination ??
      selectedProduct?.fixedSenderDenominations?.at(0) ??
      0;
    setSelectedAmount(price);
  }, [selectedProduct]);

  return (
    <Container>
      {!value?.content.length ? (
        <CircularProgress
          size={50}
          sx={{
            position: 'absolute',
            top: 200,
            left: 0,
            color: '#c45500',
            right: 0,
            margin: 'auto',
          }}
        />
      ) : (
        <>
          <ProductCard
            img={selectedProduct?.img}
            name={selectedProduct?.name}
            price={selectedAmount}
          />
          <ProductDisplay
            selectedAmount={selectedAmount}
            inputtedAmount={inputtedAmount}
            quantity={quantity}
            product={selectedProduct!}
            onAmountListClick={handleAmountListClick}
            onAmountChange={handleAmountInputChange}
            onQuantityChange={handleQuantityInputChange}
          />
          <CartCTA quantity={quantity} totalPrice={totalPrice} />
        </>
      )}
    </Container>
  );
};

export default ProductDetailPage;
