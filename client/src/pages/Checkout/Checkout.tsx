import React from 'react';
import Header from '../../components/common/Header/Header';
import CheckoutList from '../../components/domain/Checkout/CheckoutList';
import CheckoutFooter from '../../components/domain/Checkout/CheckoutFooter';
import useBasket from '../../hooks/useBasket';

function Checkout() {
  const { getTotalBasketAmount } = useBasket();
  return (
    <div>
      <Header />
      <div>주문 확인</div>총 주문 금액: {getTotalBasketAmount()}원
      <CheckoutList />
      <CheckoutFooter />
    </div>
  );
}

export default Checkout;
