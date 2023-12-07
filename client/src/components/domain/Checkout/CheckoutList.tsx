import React from 'react';
import styled from '@emotion/styled';
import CheckoutItem from './CheckoutItem';
import { useAppSelector } from '../../../hooks/useStore';

const List = styled.div``;

function CheckoutList() {
  const { basketList } = useAppSelector((state) => state.basketReducer);
  return (
    <List>
      {basketList.map((basketItem, index) => (
        <CheckoutItem basketItem={basketItem} index={index} />
      ))}
    </List>
  );
}

export default CheckoutList;
