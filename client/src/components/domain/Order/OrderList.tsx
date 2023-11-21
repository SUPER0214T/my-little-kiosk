import { useAppSelector } from '../../../hooks/useStore';
import React, { useEffect } from 'react';
import OrderItem from './OrderItem';
import { QueryCache, useQuery, useQueryClient } from 'react-query';
import { getMasterAll } from '../../../services/master';
import { ItemData } from '../../../types/master';

const useGetQueryData: <ResType>(key: string[]) => ResType | undefined = (key) => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData(key);
};

function OrderList() {
  const itemData = useGetQueryData<{ data: ItemData[] }>(['home', 'getMasterAll']);

  return (
    <div className="order-list" data-testid={'order-list'}>
      {itemData ? itemData.data.map((item) => <OrderItem itemData={item} />) : <div>존재하지 않습니다.</div>}
    </div>
  );
}

export default OrderList;
