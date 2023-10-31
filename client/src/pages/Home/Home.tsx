/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { useAppDispatch } from '../../hooks/useStore';
import { setItemData } from '../../redux/masterSlice';
import { MasterDownBtn, OrderBtn, Wrapper } from './Home.styles';
import { getMasterAll } from '../../services/master';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleOrderBtnClick = () => {
    navigate(ROUTES.ORDER);
  };

  const handleMasterDownBtnClick = async () => {
    const response = await getMasterAll();
    dispatch(setItemData(response.data));
  };

  return (
    <Wrapper>
      <MasterDownBtn onClick={handleMasterDownBtnClick}>마스터 수신</MasterDownBtn>
      <OrderBtn onClick={handleOrderBtnClick}>주문하기</OrderBtn>
    </Wrapper>
  );
};

export default Home;
