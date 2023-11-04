import { ItemData } from '../../../types/master';
import React from 'react';
import { useGoTo } from '../../../hooks/useGoTo';

interface OrderItemProps {
  itemData: ItemData;
}

function OrderItem({ itemData }: OrderItemProps) {
  const { goToOrderDetail } = useGoTo();
  /**
   * @TODO 아래의 방식에서 itemData.ITEM_CD를 하는 것이 좋을까?
   * 아니면 handleItemClick으로 ITEM_CD를 전달하는 것이 좋은 방법일까?
   * 그리고 이것을 결정지을 때 어떤 개념을 배워야 도움이 될 수 있을까?
   */
  const handleItemClick = () => {
    goToOrderDetail(itemData.ITEM_CD);
  };

  return (
    <div className="order-item" onClick={handleItemClick}>
      <div className="image-wrapper">
        <img src={itemData.IMG_URL} />
      </div>
      <div className="name">{itemData.ITEM_NM}</div>
      <div className="price">{itemData.ITEM_PRIC}원</div>
    </div>
  );
}

export default OrderItem;
