import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Layout = styled.div``;

export const Title = styled.div`
  font-size: 2rem;
  text-align: center;
  margin: 2rem;
`;

export const PaymentSelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaymentList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PaymentCard = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  border: 1px solid #d9d9d9;
  border-radius: 1rem;
  font-size: 2rem;
  cursor: pointer;
  flex-wrap: wrap;
  margin: 1rem;
  border-color: ${(props) => (props.isSelected ? 'black' : '#d9d9d9')};
`;

export const TotalPaymentAmount = styled.div`
  font-size: 2rem;
  text-align: center;
  color: red;
  margin-top: 1rem;
`;

export const Footer = styled.div`
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

export const CancelBtn = styled.div`
  ${Btn};
`;

export const ConfirmBtn = styled.div`
  ${Btn};
`;
