/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { customAxios } from '../../services/axios';
import { API_LIST } from '../../constants/apiList';
import { useAppDispatch } from '../../hooks/useStore';
import { setItemData } from '../../redux/masterSlice';
import { MasterDownBtn, OrderBtn, Wrapper } from './Home.styles';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleOrderBtnClick = () => {
    navigate(ROUTES.ORDER);
  };

  const handleMasterDownBtnClick = async () => {
    const response = await customAxios.get(API_LIST.MASTER.ALL);
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
