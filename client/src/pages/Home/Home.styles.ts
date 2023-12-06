import styled from '@emotion/styled';
import Bg from '../../assets/images/bg.gif';

const Wrapper = styled.div`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
  min-height: 700px;
  background-image: url(${Bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const OrderBtn = styled.div<{ isDisabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: ${(props) => (props.isDisabled ? props.theme.white : props.theme.primary)};
  color: ${(props) => props.theme.white};
  padding: 32px 56px;
  border-radius: 16px;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 200px;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const MasterDownBtn = styled.div`
  position: absolute;
  left: 8px;
  top: 8px;
  padding: 10px;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.white};
  cursor: pointer;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.primary};
`;

export { Wrapper, OrderBtn, MasterDownBtn };
