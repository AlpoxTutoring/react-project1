import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MainPage, BoardPage } from 'pages';
import { Layout } from 'components';
import { BoardRouter, MainRouter } from '../routers';

// 루트 라우터
export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <MainRouter />
          <BoardRouter />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
