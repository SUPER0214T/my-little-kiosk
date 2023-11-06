import React from 'react';
import { useGoTo } from '../../../hooks/useGoTo';
import * as S from './CheckoutFooter.styles';

function CheckoutFooter() {
  const { goToOrder, goToPayment } = useGoTo();
  const handlePrevClick = () => {
    goToOrder();
  };

  const handlePaymentClick = () => {
    goToPayment();
  };

  return (
    <S.Wrapper>
      <S.PrevBtn onClick={handlePrevClick}>이전</S.PrevBtn>
      <S.PaymentBtn onClick={handlePaymentClick}>결제하기</S.PaymentBtn>
    </S.Wrapper>
  );
}

export default CheckoutFooter;
