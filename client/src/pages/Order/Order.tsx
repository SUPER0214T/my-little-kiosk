import React from 'react';
import './OrderItem.css';
import { ItemData } from '../../types/master';
import { useAppSelector } from '../../hooks/useStore';

function Order() {
  return (
    <div>
      <OrderList />
    </div>
  );
}

export default Order;

// OrderList
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
    <div className="order-list">
      {itemData ? itemData.map((item) => <OrderItem itemData={item} />) : <div>존재하지 않습니다.</div>}
    </div>
  );
}

// OrderItem
interface OrderItemProps {
  itemData: ItemData;
}

function OrderItem({ itemData }: OrderItemProps) {
  return (
    <div className="order-item">
      <div className="image-wrapper">
        <img src={itemData.IMG_URL} />
      </div>
      <div className="name">{itemData.ITEM_NM}</div>
      <div className="price">{itemData.ITEM_PRIC}원</div>
    </div>
  );
}
