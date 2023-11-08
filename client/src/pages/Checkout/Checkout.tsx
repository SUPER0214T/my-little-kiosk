import React from 'react';
import Header from '../../components/common/Header/Header';
import CheckoutList from '../../components/domain/Checkout/CheckoutList';
import CheckoutFooter from '../../components/domain/Checkout/CheckoutFooter';
import useBasket from '../../hooks/useBasket';
import { useAppSelector } from '../../hooks/useStore';
import { BasketItem } from '../../types/basket';
import { ItemData } from '../../types/master';

export type CombineBasketInfo = ItemData & { qty: number };

export const combineBasketInfo = (basketList: BasketItem[], master: ItemData[]) => {
  return basketList.map((basketItem) => {
    const findItemData = master.find((itemData) => itemData.ITEM_CD === basketItem.itemCd);
    if (!findItemData) {
      throw new Error(`${basketItem.itemCd}에 해당하는 ITEM_CD의 정보가 master에 존재하지 않습니다.`);
    }

    return { ...findItemData, qty: basketItem.qty };
  });
};

function Checkout() {
  const { basketReducer, masterReducer } = useAppSelector((state) => state);
  const { getTotalBasketAmount } = useBasket(basketReducer.basketList);

  const totalBasketAmount = getTotalBasketAmount(combineBasketInfo(basketReducer.basketList, masterReducer.itemData));

  return (
    <div>
      <Header />
      <div>주문 확인</div>총 주문 금액: {totalBasketAmount}원
      <CheckoutList />
      <CheckoutFooter />
    </div>
  );
}

export default Checkout;
