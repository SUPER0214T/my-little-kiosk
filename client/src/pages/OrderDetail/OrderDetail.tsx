import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/common/Header/Header';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { ItemData } from '../../types/master';
import { addBasketItem } from '../../redux/basketSlice';
import { CancelBtn, ConfirmBtn, Footer, ItemCode, ItemInfo, ItemName, ItemPrice } from './OrderDetail.styles';
import { useGoTo } from '../../hooks/useGoTo';

function OrderDetail() {
  const { itemCd } = useParams();
  const { itemData } = useAppSelector((state) => state.masterReducer);
  const [itemInfo, setItemInfo] = useState<ItemData>();
  const dispatch = useAppDispatch();
  const { goToOrder } = useGoTo();

  /**
   * @todo 공통 함수로 추출할 것
   */
  const findItemByItemCd = (itemCd: string = ''): ItemData | undefined => {
    return itemData.find((item) => item.ITEM_CD === itemCd);
  };

  useEffect(() => {
    setItemInfo(findItemByItemCd(itemCd));
  }, [itemCd]);

  const handleConfirmClick = () => {
    if (!itemCd) return;

    dispatch(addBasketItem(itemCd));
    goToOrder();
  };

  if (!itemInfo) {
    return <div>해당 상품이 존재하지 않습니다.</div>;
  }

  return (
    <div>
      <Header />
      <ItemInfo>
        <div className="info-left">
          <img src={itemInfo.IMG_URL} />
        </div>
        <div className="info-right">
          <ItemCode>
            <span>제품 코드:</span>
            <span>{itemInfo.ITEM_CD}</span>
          </ItemCode>
          <ItemName>
            <span>제품명:</span>
            <span>{itemInfo.ITEM_NM}</span>
          </ItemName>
          <ItemPrice>
            <span>가격:</span>
            <span>{itemInfo.ITEM_PRIC}</span>
          </ItemPrice>
        </div>
      </ItemInfo>
      <Footer>
        {/*@todo 이렇게 딱하나의 역할만 한다면 굳이 handleCancelClick을 따로 만들 필요가 있을까? */}
        {/*@todo 아래의 버튼들을 재사용 가능하게 만들 수 있지 않을까? */}
        <CancelBtn onClick={goToOrder}>취소</CancelBtn>
        <ConfirmBtn onClick={handleConfirmClick}>구매하기</ConfirmBtn>
      </Footer>
    </div>
  );
}

export default OrderDetail;
