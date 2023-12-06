import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const ItemInfo = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
`;

export const ItemCode = styled.div`
  margin: 1rem;
`;

export const ItemName = styled.div`
  margin: 1rem;
`;

export const ItemPrice = styled.div`
  margin: 1rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Btn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  padding: 1rem;
  // 아래는 theme을 어떻게?
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
