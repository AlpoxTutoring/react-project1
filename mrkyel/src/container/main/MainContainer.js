import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import ContentsBox from 'components/ContentsBox/ContentsBox';
import Login from 'components/Login/Login';
import React from 'react';

const MainContainer = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const isRegister = useMemo(() => pathname === '/register', [pathname]);
  if (isRegister) return null;

  //   if (window.location.pathname === '/register') return null;

  return (
    <>
      <Login />
      <ContentsBox />
    </>
  );
};

export default MainContainer;
