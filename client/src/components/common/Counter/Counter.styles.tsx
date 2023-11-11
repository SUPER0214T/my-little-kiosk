import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border: 1px solid black;
`;

export const Btn = css`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlusBtn = styled.div`
  ${Btn}
`;

export const MinusBtn = styled.div`
  ${Btn}
`;
