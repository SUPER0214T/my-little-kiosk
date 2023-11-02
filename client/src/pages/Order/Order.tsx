import React from 'react';
import OrderList from '../../components/domain/Order/OrderList';
import './OrderItem.css';
import Header from '../../components/common/Header/Header';

function Order() {
  return (
    <div>
      <Header />
      <OrderList />
    </div>
  );
}

export default Order;
