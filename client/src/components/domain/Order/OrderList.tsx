import React from 'react';
import OrderItem from './OrderItem';
import useMaster from '../../../hooks/useMaster';

function OrderList() {
  const { getMasterData } = useMaster();

  return (
    <div className="order-list" data-testid={'order-list'}>
      {getMasterData().map((item) => (
        <OrderItem itemData={item} />
      ))}
    </div>
  );
}

export default OrderList;
