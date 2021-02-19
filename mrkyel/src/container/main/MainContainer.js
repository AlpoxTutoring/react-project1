import React from 'react';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Login from 'components/Login/Login';

const MainContainer = ({ children }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const isRegister = useMemo(() => pathname === '/register', [pathname]);
  if (isRegister) return null;

  //   if (window.location.pathname === '/register') return null;

  return (
    <>
      <Login />
      {children}
    </>
  );
};

export default MainContainer;
