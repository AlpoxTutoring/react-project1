import React from 'react';
import { MainPage } from '../pages/Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// 루트 라우터
export const RootRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MainPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
