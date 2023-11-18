/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { setItemData } from '../../redux/masterSlice';
import { MasterDownBtn, OrderBtn, Wrapper } from './Home.styles';
import { getMasterAll } from '../../services/master';
import { useGoTo } from '../../hooks/useGoTo';
import { resetBasketList } from '../../redux/basketSlice';
import { resetPaymentInfo } from '../../redux/paymentSlice';

const Home = () => {
  const { goToOrder } = useGoTo();
  const dispatch = useAppDispatch();
  const { itemData } = useAppSelector((state) => state.masterReducer);
  const [isMasterDownloading, setIsMasterDownloading] = useState(false);

  const handleOrderBtnClick = () => {
    const isMasterEmpty = itemData.length === 0;
    if (isMasterEmpty) {
      throw new Error('master가 비어있습니다.');
    }

    goToOrder();
  };

  const handleMasterDownBtnClick = async () => {
    // 이 부분이 문제가 될 수 있다. 마스터 수신 클릭하고 바로 주문하기 누르면 응답 안온 상태로 넘어가려고 하니까 문제 발생
    setIsMasterDownloading(true);
    const response = await getMasterAll();
    dispatch(setItemData(response.data));
    setIsMasterDownloading(false);
  };

  useEffect(() => {
    dispatch(resetBasketList());
    dispatch(resetPaymentInfo());
  }, []);

  return (
    <Wrapper>
      <MasterDownBtn onClick={handleMasterDownBtnClick}>마스터 수신</MasterDownBtn>
      <OrderBtn onClick={handleOrderBtnClick} isDisabled={isMasterDownloading}>
        주문하기
      </OrderBtn>
    </Wrapper>
  );
};

export default Home;
