import {ItemData} from "../../../types/master";
import React from "react";

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

export default OrderItem;