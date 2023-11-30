import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 950px;
  margin: 0 auto;
  flex: 1 1;

  @media screen and (max-width: 950px) {
    width: 100%;
  }

  @media screen and (min-width: 1300px) {
    width: 1300px;
  }
`;
