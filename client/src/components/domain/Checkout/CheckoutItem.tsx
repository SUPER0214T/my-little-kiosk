import React, { useState } from 'react';
import { BasketItem } from '../../../types/basket';
import useMaster from '../../../hooks/useMaster';
import * as S from './CheckoutItem.styles';
import Counter from '../../common/Counter/Counter';
import { useAppDispatch } from '../../../hooks/useStore';
import { decreaseBasketItemQty, increaseBasketItemQty } from '../../../redux/basketSlice';

interface CheckoutItemProps {
  basketItem: BasketItem;
  index: number;
}

function CheckoutItem({ basketItem, index }: CheckoutItemProps) {
  const { findItemByItemCd } = useMaster();
  const dispatch = useAppDispatch();
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

  const handleMinusClick = () => {
    dispatch(decreaseBasketItemQty({ index }));
  };

  const handlePlusClick = () => {
    dispatch(increaseBasketItemQty({ index }));
  };

  return (
    <S.Item>
      <div className="item-info">
        <div className="left">
          <img className="item-image" src={itemInfo.IMG_URL} />
        </div>
        <div className="right">
          <div className="item-name">{itemInfo.ITEM_NM}</div>
          {/* @todo 아래 계산 방식 개선 필요 */}
          <div className="item-price">{itemInfo.ITEM_PRIC * basketItem.qty}</div>
        </div>
      </div>
      <Counter handleMinusClick={handleMinusClick} handlePlusClick={handlePlusClick} qty={basketItem.qty} />
    </S.Item>
  );
}

export default CheckoutItem;
