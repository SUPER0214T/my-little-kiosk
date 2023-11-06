import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { BasketItem } from '../../../types/basket';
import useMaster from '../../../hooks/useMaster';

interface CheckoutItemProps {
  basketItem: BasketItem;
}

function CheckoutItem({ basketItem }: CheckoutItemProps) {
  const { findItemByItemCd } = useMaster();
  /**
   * @todo 아래의 방식이 좋은 방식일까?
   */
  const [itemInfo] = useState(findItemByItemCd(basketItem.itemCd));

  /**
   * @todo 아래의 방식이 맞을까? 개선할 수 있는 방법을 찾아보자.
   */
  if (!itemInfo) {
    console.error(`itemCd: ${basketItem.itemCd}가 존재하지 않습니다.`);

    return <div>상품이 존재하지 않습니다.</div>;
  }

  /**
   * @todo 아래의 방식에서는 클래스를 사용하였는데 styled components에서 className을 허용하는 기준이 어떻게 될까?
   */
  return (
    <Item>
      <div className="left">
        <img className="item-image" src={itemInfo.IMG_URL} />
      </div>
      <div className="right">
        <div className="item-name">{itemInfo.ITEM_NM}</div>
        <div className="item-price">{itemInfo.ITEM_PRIC}</div>
      </div>
    </Item>
  );
}

export default CheckoutItem;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  border: 1px solid black;
  padding: 1rem;
  margin: 1rem;

  .left {
    height: 100%;

    .item-image {
      display: block;
      height: 100%;
    }
    margin-right: 1rem;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Btn = css``;

const PrevBtn = styled.div`
  ${Btn};
`;

const CheckoutBtn = styled.div`
  ${Btn};
`;
