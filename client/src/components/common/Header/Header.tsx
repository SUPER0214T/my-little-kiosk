import React from 'react';
import { useLocation } from 'react-router-dom';
import { HomeBtn, Logo, Wrapper } from './Header.styles';
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
      <Wrapper>
        <Logo>Logo</Logo>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <HomeBtn onClick={handleHomeBtnClick}>
        <span className="text">Home</span>
      </HomeBtn>
      <Logo>Logo</Logo>
    </Wrapper>
  );
}

export default Header;
