import React from 'react';
import OrderList from '../../components/domain/Order/OrderList';
import './OrderItem.css';
import Header from '../../components/common/Header/Header';
import OrderFooter from '../../components/domain/Order/OrderFooter/OrderFooter';

function Order() {
  return (
    <div>
      <Header />
      <OrderList />
      <OrderFooter />
    </div>
  );
}

export default Order;
