import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  border: 1px solid black;
  padding: 1rem;
  margin: 1rem;

  .left {
    height: 100%;

    .item-image {
      display: block;
      height: 100%;
    }
    margin-right: 1rem;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Btn = css``;

export const PrevBtn = styled.div`
  ${Btn};
`;

export const CheckoutBtn = styled.div`
  ${Btn};
`;
