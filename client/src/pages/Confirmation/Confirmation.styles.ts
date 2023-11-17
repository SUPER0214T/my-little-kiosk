import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Title = styled.div`
  font-size: 2rem;
  text-align: center;
  margin: 2rem;
`;

export const Btn = css`
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

export const GoToHomeBtn = styled.div`
  ${Btn};
`;
