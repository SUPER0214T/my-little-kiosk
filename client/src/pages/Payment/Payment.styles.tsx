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
  border-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
`;

export const ConfirmBtn = styled.div`
  ${Btn};
  background-color: ${({ theme }) => theme.primary};
  border-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
`;
