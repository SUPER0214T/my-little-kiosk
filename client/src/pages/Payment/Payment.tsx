import React, { useState } from 'react';
import useBasket from '../../hooks/useBasket';
import { combineBasketInfo } from '../Checkout/Checkout';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import Header from '../../components/common/Header/Header';
import { useGoTo } from '../../hooks/useGoTo';
import * as S from './Payment.styles';
import { resetPaymentInfo, updatePaymentInfo } from '../../redux/paymentSlice';
import { PaymentType } from '../../types/payment';
import useMaster from '../../hooks/useMaster';
import PaymentCard from '../../components/domain/Payment/PaymentCard/PaymentCard';

const PAYMENT_TYPE: PaymentType[] = ['credit', 'naver', 'kakao'];

function Payment() {
  const { basketReducer } = useAppSelector((state) => state);
  const { getTotalBasketAmount } = useBasket();
  const { getMasterData } = useMaster();
  const totalBasketAmount = getTotalBasketAmount(combineBasketInfo(basketReducer.basketList, getMasterData()));
  const [currentPaymentType, setCurrentPaymentType] = useState<PaymentType>('credit');

  const { goToOrder, goToConfirmation } = useGoTo();
  const dispatch = useAppDispatch();

  const handleCancelClick = () => {
    dispatch(resetPaymentInfo());
    goToOrder();
  };

  const handleConfirmClick = () => {
    if (totalBasketAmount <= 0) {
      throw new Error(`총 결제 금액이 잘못되었습니다. \n 총 결제 금액: ${totalBasketAmount}`);
    }

    dispatch(updatePaymentInfo({ paymentType: currentPaymentType, paymentAmount: totalBasketAmount }));
    goToConfirmation();
  };

  return (
    <S.Layout>
      <Header />
      <S.Title>결제 방법을 선택해주세요.</S.Title>
      <S.PaymentSelect>
        <S.PaymentList>
          {PAYMENT_TYPE.map((el) => (
            <PaymentCard
              setCurrentPaymentType={setCurrentPaymentType}
              isSelected={el === currentPaymentType}
              paymentType={el}
            />
          ))}
        </S.PaymentList>
      </S.PaymentSelect>
      <S.TotalPaymentAmount>총 결제금액: {totalBasketAmount}</S.TotalPaymentAmount>
      <S.Footer>
        <S.CancelBtn onClick={handleCancelClick}>취소</S.CancelBtn>
        <S.ConfirmBtn onClick={handleConfirmClick}>결제</S.ConfirmBtn>
      </S.Footer>
    </S.Layout>
  );
}

export default Payment;
