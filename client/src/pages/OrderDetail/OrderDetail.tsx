import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/common/Header/Header';
import { useAppDispatch } from '../../hooks/useStore';
import { ItemData } from '../../types/master';
import { addBasketItem } from '../../redux/basketSlice';
import * as S from './OrderDetail.styles';
import { useGoTo } from '../../hooks/useGoTo';
import useMaster from '../../hooks/useMaster';

function OrderDetail() {
  const { itemCd } = useParams();
  const [itemInfo, setItemInfo] = useState<ItemData>();
  const dispatch = useAppDispatch();
  const { goToOrder } = useGoTo();
  const { findItemByItemCd } = useMaster();

  useEffect(() => {
    setItemInfo(findItemByItemCd(itemCd));
  }, [itemCd, findItemByItemCd]);

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
      <S.ItemInfo>
        <div className="info-left">
          <img src={itemInfo.IMG_URL} alt="제품 이미지" />
        </div>
        <div className="info-right">
          <S.ItemCode>
            <span>제품 코드:</span>
            <span>{itemInfo.ITEM_CD}</span>
          </S.ItemCode>
          <S.ItemName>
            <span>제품명:</span>
            <span>{itemInfo.ITEM_NM}</span>
          </S.ItemName>
          <S.ItemPrice>
            <span>가격:</span>
            <span>{itemInfo.ITEM_PRIC}</span>
          </S.ItemPrice>
        </div>
      </S.ItemInfo>
      <S.Footer>
        {/* @todo 이렇게 딱하나의 역할만 한다면 굳이 handleCancelClick 따로 만들 필요가 있을까? */}
        {/* @todo 아래의 버튼들을 재사용 가능하게 만들 수 있지 않을까? */}
        <S.CancelBtn onClick={goToOrder}>취소</S.CancelBtn>
        <S.ConfirmBtn onClick={handleConfirmClick}>구매하기</S.ConfirmBtn>
      </S.Footer>
    </div>
  );
}

export default OrderDetail;
