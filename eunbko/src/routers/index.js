import React from 'react';
import { MainPage } from '../pages/Main';
import { BoardPage } from '../pages/Board';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// 루트 라우터
export const RootRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/board" component={BoardPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
