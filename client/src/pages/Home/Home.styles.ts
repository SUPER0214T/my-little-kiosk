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

const OrderBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: white;
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
  left: 0;
  top: 0;
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 1rem;
  background-color: white;
  cursor: pointer;
`;

export { Wrapper, OrderBtn, MasterDownBtn };
