import React from 'react';
import styled from '@emotion/styled';
import useBasket from '../../hooks/useBasket';
import { combineBasketInfo } from '../Checkout/Checkout';
import { useAppSelector } from '../../hooks/useStore';
import { css } from '@emotion/react';
import Header from '../../components/common/Header/Header';
import { useGoTo } from '../../hooks/useGoTo';

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
    <Layout>
      <Header />
      <Title>결제 방법을 선택해주세요.</Title>
      <PaymentSelect>
        <PaymentList>
          {PAYMENT_TYPE.map((el) => (
            <PaymentCard>{el}</PaymentCard>
          ))}
        </PaymentList>
      </PaymentSelect>
      <TotalPaymentAmount>총 결제금액: {totalBasketAmount}</TotalPaymentAmount>
      <Footer>
        <CancelBtn onClick={handleCancelClick}>취소</CancelBtn>
      </Footer>
    </Layout>
  );
}

export default Payment;

const Layout = styled.div``;

const Title = styled.div`
  font-size: 2rem;
  text-align: center;
  margin: 2rem;
`;

const PaymentSelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaymentList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PaymentCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  border: 1px solid black;
  border-radius: 1rem;
  font-size: 2rem;
  cursor: pointer;
  flex-wrap: wrap;
  margin: 1rem;
`;

const TotalPaymentAmount = styled.div`
  font-size: 2rem;
  text-align: center;
  color: red;
  margin-top: 1rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 2rem;
  min-width: 150px;
  cursor: pointer;
`;

const CancelBtn = styled.div`
  ${Btn};
`;
