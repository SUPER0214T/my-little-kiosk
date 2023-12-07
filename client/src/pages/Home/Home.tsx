/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import * as S from './Home.styles';
import { getMasterAll } from '../../services/master';
import { useGoTo } from '../../hooks/useGoTo';
import { MasterData } from '../../types/master';
import { useAppDispatch } from '../../hooks/useStore';
import { resetBasketList } from '../../redux/basketSlice';
import { resetPaymentInfo } from '../../redux/paymentSlice';

function Home() {
  const { goToOrder } = useGoTo();
  const dispatch = useAppDispatch();
  const { data, isLoading, refetch } = useQuery<{ data: MasterData }>(['home', 'getMasterAll'], getMasterAll, {
    cacheTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
    onError: (err) => {
      console.log(err);
    },
    // enabled: false,
  });

  const handleOrderBtnClick = () => {
    console.log(data);
    const isMasterEmpty = data?.data.ITEM_DATA.length === 0;
    if (isMasterEmpty) {
      throw new Error('master가 비어있습니다.');
    }

    goToOrder();
  };

  const handleMasterDownBtnClick = async () => {
    refetch();
  };

  useEffect(() => {
    dispatch(resetBasketList());
    dispatch(resetPaymentInfo());
  }, [dispatch]);

  return (
    <S.Wrapper>
      <S.MasterDownBtn onClick={handleMasterDownBtnClick}>마스터 수신</S.MasterDownBtn>
      <S.OrderBtn onClick={handleOrderBtnClick} isDisabled={isLoading}>
        주문하기
      </S.OrderBtn>
    </S.Wrapper>
  );
}

export default Home;
