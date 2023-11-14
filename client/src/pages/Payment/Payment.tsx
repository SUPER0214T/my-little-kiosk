import React from 'react';
import useBasket from '../../hooks/useBasket';
import { combineBasketInfo } from '../Checkout/Checkout';
import { useAppSelector } from '../../hooks/useStore';
import Header from '../../components/common/Header/Header';
import { useGoTo } from '../../hooks/useGoTo';
import * as S from './Payment.styles';

const PAYMENT_TYPE = ['credit', 'naver', 'kakao'];

function Payment() {
  const { basketReducer, masterReducer } = useAppSelector((state) => state);
  const { getTotalBasketAmount } = useBasket(basketReducer.basketList);
  const totalBasketAmount = getTotalBasketAmount(combineBasketInfo(basketReducer.basketList, masterReducer.itemData));

  const { goToOrder } = useGoTo();

  const handleCancelClick = () => {
    goToOrder();
  };

  return (
    <S.Layout>
      <Header />
      <S.Title>결제 방법을 선택해주세요.</S.Title>
      <S.PaymentSelect>
        <S.PaymentList>
          {PAYMENT_TYPE.map((el) => (
            <S.PaymentCard>{el}</S.PaymentCard>
          ))}
        </S.PaymentList>
      </S.PaymentSelect>
      <S.TotalPaymentAmount>총 결제금액: {totalBasketAmount}</S.TotalPaymentAmount>
      <S.Footer>
        <S.CancelBtn onClick={handleCancelClick}>취소</S.CancelBtn>
      </S.Footer>
    </S.Layout>
  );
}

export default Payment;
