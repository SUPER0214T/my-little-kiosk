import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  padding: 1rem;
  background-color: white;
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

export const PrevBtn = styled.div`
  ${Btn}
`;

export const PaymentBtn = styled.div`
  ${Btn}
`;
