import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MainPage, BoardPage } from 'pages';
import { Layout } from 'components';

// 루트 라우터
export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/board" component={BoardPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
