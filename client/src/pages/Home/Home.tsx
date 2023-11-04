/** @jsxImportSource @emotion/react */
import React from 'react';
import { useAppDispatch } from '../../hooks/useStore';
import { setItemData } from '../../redux/masterSlice';
import { MasterDownBtn, OrderBtn, Wrapper } from './Home.styles';
import { getMasterAll } from '../../services/master';
import { useGoTo } from '../../hooks/useGoTo';

const Home = () => {
  const { goToOrder } = useGoTo();
  const dispatch = useAppDispatch();

  const handleOrderBtnClick = () => {
    goToOrder();
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
