/** @jsxImportSource @emotion/react */
import React from 'react';
import { MasterDownBtn, OrderBtn, Wrapper } from './Home.styles';
import { getMasterAll } from '../../services/master';
import { useGoTo } from '../../hooks/useGoTo';
import { useQuery } from 'react-query';
import { ItemData } from '../../types/master';

const Home = () => {
  const { goToOrder } = useGoTo();
  const { data, isLoading, refetch } = useQuery<{ data: ItemData[] }>(['home', 'getMasterAll'], getMasterAll, {
    cacheTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
    onError: (err) => {
      console.log(err);
    },
    // enabled: false,
  });

  const handleOrderBtnClick = () => {
    console.log(data);
    const isMasterEmpty = data?.data.length === 0;
    if (isMasterEmpty) {
      throw new Error('master가 비어있습니다.');
    }

    goToOrder();
  };

  const handleMasterDownBtnClick = async () => {
    refetch();
  };

  return (
    <Wrapper>
      <MasterDownBtn onClick={handleMasterDownBtnClick}>마스터 수신</MasterDownBtn>
      <OrderBtn onClick={handleOrderBtnClick} isDisabled={isLoading}>
        주문하기
      </OrderBtn>
    </Wrapper>
  );
};

export default Home;
