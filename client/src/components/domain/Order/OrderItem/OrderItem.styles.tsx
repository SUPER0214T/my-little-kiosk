import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border: 1px solid grey;
  border-radius: 8px;
  margin: 8px;

  @media screen and (max-width: 950px) {
    flex-grow: 1;
    width: 100%;
  }
`;
