import React from 'react';
import Header from '../../components/common/Header/Header';
import CheckoutList from '../../components/domain/Checkout/CheckoutList';
import CheckoutFooter from '../../components/domain/Checkout/CheckoutFooter';

function Checkout() {
  return (
    <div>
      <Header />
      <div>주문 확인</div>
      <CheckoutList />
      <CheckoutFooter />
    </div>
  );
}

export default Checkout;
