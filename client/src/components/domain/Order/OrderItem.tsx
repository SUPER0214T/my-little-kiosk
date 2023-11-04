import { ItemData } from '../../../types/master';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';

interface OrderItemProps {
  itemData: ItemData;
}

function OrderItem({ itemData }: OrderItemProps) {
  const navigate = useNavigate();

  /**
   * @TODO 매번 이렇게 어느 경로로 이동하는 navigate를 선언해야 하는걸까?
   * 이것은 중복이다. 이걸 navigate를 가져와서 이동하는 함수들을 모아둔 커스텀 훅으로 만드는 것이 더 좋은 방법이 아닐까?
   */
  const goToItemDetail = (itemCd: string) => navigate(ROUTES.ORDER + `/${itemCd}`);

  /**
   * @TODO 아래의 방식에서 itemData.ITEM_CD를 하는 것이 좋을까?
   * 아니면 handleItemClick으로 ITEM_CD를 전달하는 것이 좋은 방법일까?
   * 그리고 이것을 결정지을 때 어떤 개념을 배워야 도움이 될 수 있을까?
   */
  const handleItemClick = () => {
    goToItemDetail(itemData.ITEM_CD);
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
