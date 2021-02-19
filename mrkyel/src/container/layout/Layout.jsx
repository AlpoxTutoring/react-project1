import ContentsBox from 'components/ContentsBox/ContentsBox';
import Header from 'components/Header/Header';
import MainContainer from 'container/main/MainContainer';
import React from 'react';

const Layout = ({ headerShown = true }) => {
  return (
    <>
      {headerShown && <Header />}
      <MainContainer>
        <ContentsBox />
      </MainContainer>
    </>
  );
};

export default Layout;
