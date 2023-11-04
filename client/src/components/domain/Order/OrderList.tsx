import { useAppSelector } from '../../../hooks/useStore';
import React from 'react';
import OrderItem from './OrderItem';

function OrderList() {
  // const [itemData, setItemData] = useState<ItemData[]>([]);
  // const getMasterItemData = () => {
  //   customAxios.get('/master').then((res) => setItemData(res.data));
  // };

  // useEffect(() => {
  //   getMasterItemData();
  // }, []);
  const { itemData } = useAppSelector((state) => state.masterReducer);

  return (
    <div className="order-list" data-testid={'order-list'}>
      {itemData ? itemData.map((item) => <OrderItem itemData={item} />) : <div>존재하지 않습니다.</div>}
    </div>
  );
}

export default OrderList;
