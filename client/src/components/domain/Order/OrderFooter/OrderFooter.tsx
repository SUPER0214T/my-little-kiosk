import React from 'react';
import { useGoTo } from '../../../../hooks/useGoTo';
import { useAppSelector } from '../../../../hooks/useStore';
// @todo 아래처럼 가져오는 것보다 S.CheckoutBtn 이렇게 한번에 가져오는 것이 더 맞는 방식일까?
import * as S from './OrderFooter.styles';

export function OrderFooter() {
  const { goToCheckout } = useGoTo();
  const { basketList } = useAppSelector((state) => state.basketReducer);

  // @todo Footer에서 결제 버튼을 따로 컴포넌트로 빼내는 것이 맞지 않을까?
  const isBasketEmpty = () => {
    return basketList.length === 0;
  };

  const handleCheckoutClick = () => {
    if (isBasketEmpty()) {
      // @todo 알림 모달 띄우기
      return;
    }
    goToCheckout();
  };

  return (
    <S.Wrapper>
      <S.RightBtnGroup>
        <S.CouponBtn>쿠폰</S.CouponBtn>
        <S.CheckoutBtn onClick={handleCheckoutClick}>결제하기</S.CheckoutBtn>
      </S.RightBtnGroup>
    </S.Wrapper>
  );
}

export default OrderFooter;
