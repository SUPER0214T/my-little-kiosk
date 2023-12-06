import styled from '@emotion/styled';

export const Layout = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  border: 1px solid ${({ theme }) => theme.white};
  border-radius: 1rem;
  font-size: 2rem;
  cursor: pointer;
  flex-wrap: wrap;
  margin: 1rem;
  border-color: ${(props) => (props.isSelected ? props.theme.primary : props.theme.primaryLight)};
  color: ${(props) => (props.isSelected ? props.theme.primary : props.theme.primaryLight)};
`;
