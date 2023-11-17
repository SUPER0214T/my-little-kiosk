import React, { useState } from 'react';
import useBasket from '../../hooks/useBasket';
import { combineBasketInfo } from '../Checkout/Checkout';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import Header from '../../components/common/Header/Header';
import { useGoTo } from '../../hooks/useGoTo';
import * as S from './Payment.styles';
import { PaymentType, resetPaymentInfo, updatePaymentInfo } from '../../redux/paymentSlice';

const PAYMENT_TYPE = ['credit', 'naver', 'kakao'];

function Payment() {
  const { basketReducer, masterReducer } = useAppSelector((state) => state);
  const { getTotalBasketAmount } = useBasket(basketReducer.basketList);
  const totalBasketAmount = getTotalBasketAmount(combineBasketInfo(basketReducer.basketList, masterReducer.itemData));
  const [currentPaymentType, setCurrentPaymentType] = useState<PaymentType>('credit');

  const { goToOrder, goToConfirmation } = useGoTo();

  const handleCancelClick = () => {
    dispatch(resetPaymentInfo());
    goToOrder();
  };

  // @todo 컴포넌트 분리 필요
  const dispatch = useAppDispatch();
  const handlePaymentCardClick = (currentPaymentType: string) => {
    switch (currentPaymentType) {
      case 'credit':
        setCurrentPaymentType('credit');
        break;
      case 'naver':
        setCurrentPaymentType('naver');
        break;
      case 'kakao':
        setCurrentPaymentType('kakao');
        break;
      default:
        throw new Error(`${currentPaymentType}는 처리될 수 없는 paymentType입니다.`);
        break;
    }
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
            <S.PaymentCard onClick={() => handlePaymentCardClick(el)} isSelected={el === currentPaymentType}>
              {el}
            </S.PaymentCard>
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
