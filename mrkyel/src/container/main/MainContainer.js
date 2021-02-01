import ContentsBox from 'components/ContentsBox/ContentsBox';
import Login from 'components/Login/Login';
import React from 'react';

const MainContainer = () => {
  if (window.location.pathname === '/register') return null;
  return (
    <>
      <Login />
      <ContentsBox />
    </>
  );
};

export default MainContainer;
