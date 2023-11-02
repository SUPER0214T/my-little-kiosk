import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.light.border1};
`;

export const HomeBtn = styled.div`
  padding: 6px 8px;
  border: 1px solid black;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  left: 1rem;
`;

export const Logo = styled.div``;
