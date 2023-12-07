import React from 'react';
import OrderItem from '../OrderItem/OrderItem';
import useMaster from '../../../../hooks/useMaster';
import * as S from './OrderList.styles';

function OrderList() {
  const { getMasterData } = useMaster();

  return (
    <S.Wrapper data-testid="order-list">
      {getMasterData().ITEM_DATA.map((item) => (
        <OrderItem itemData={item} />
      ))}
    </S.Wrapper>
  );
}

export default OrderList;
