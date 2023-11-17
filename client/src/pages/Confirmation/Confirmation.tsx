import React, { useEffect, useState } from 'react';
import { postTrSave } from '../../services/transaction';
import { useAppSelector } from '../../hooks/useStore';
import Header from '../../components/common/Header/Header';
import { useGoTo } from '../../hooks/useGoTo';
import * as S from './Confirmation.styles';

function Confirmation() {
  const [callNo, setCallNo] = useState<null | number>(null);
  const { basketList } = useAppSelector((state) => state.basketReducer);
  const { goToHome } = useGoTo();

  useEffect(() => {
    postTrSave(basketList).then((res) => {
      setCallNo(res.data.CALL_NO);
    });
  }, []);

  return (
    <div>
      <Header />
      <S.Title>호출 번호: {callNo}</S.Title>
      {callNo !== null && <S.GoToHomeBtn onClick={goToHome}>메인 화면으로 이동</S.GoToHomeBtn>}
    </div>
  );
}

export default Confirmation;
