import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './Header.styles';
import { useGoTo } from '../../../hooks/useGoTo';
import { ROUTES } from '../../../constants/routes';

const blackList = [ROUTES.PAYMENT, ROUTES.CONFIRMATION];

function Header() {
  const { goToHome } = useGoTo();
  const { pathname } = useLocation();

  const handleHomeBtnClick = () => {
    goToHome();
  };

  const isBlackList = blackList.includes(pathname);
  if (isBlackList) {
    return (
      <S.Wrapper>
        <S.Logo>Logo</S.Logo>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <S.HomeBtn onClick={handleHomeBtnClick}>
        <span className="text">Home</span>
      </S.HomeBtn>
      <S.Logo>Logo</S.Logo>
    </S.Wrapper>
  );
}

export default Header;
