import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.black};
`;

export const HomeBtn = styled.div`
  padding: 6px 8px;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  left: 1rem;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.primary};
`;

export const Logo = styled.div`
  color: ${(props) => props.theme.primary};
`;
