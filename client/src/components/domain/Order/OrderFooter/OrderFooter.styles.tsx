import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div`
  position: sticky;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.white};
  border-top: 1px solid ${({ theme }) => theme.black};
  padding: 0.5rem;
`;

export const RightBtnGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const Btn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  border: 1px solid black;
  border-radius: 2rem;
  padding: 0.5rem;
  cursor: pointer;
  margin: 0 0.5rem;
`;

export const CouponBtn = styled.div`
  ${Btn};
  border-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primary};
`;

export const CheckoutBtn = styled.div`
  ${Btn};
  background-color: ${(props) => props.theme.primary};
  border-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
`;
