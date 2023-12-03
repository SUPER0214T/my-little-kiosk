import React from 'react';
import * as S from './PaymentCard.styles';
import { PaymentType } from '../../../../types/payment';

// @todo 컴포넌트 더 재사용 가능하게 개선 필요 현재는 paymentType이라는 텍스트만 들어올 수 있으니
// @todo 또한 굳이 Payment에 있을 필요 없고 PaymentCard에서만 사용될 기능들은 옮기기
type PaymentCardProps = {
  isSelected: boolean;
  handlePaymentCardClick: () => void;
  paymentType: PaymentType;
};

function PaymentCard({ isSelected, paymentType, handlePaymentCardClick }: PaymentCardProps) {
  return (
    <S.Layout onClick={handlePaymentCardClick} isSelected={isSelected}>
      {paymentType}
    </S.Layout>
  );
}

export default PaymentCard;
