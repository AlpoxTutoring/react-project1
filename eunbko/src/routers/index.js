import React from 'react';
import { AuthPage, MainPage } from 'pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// 루트 라우터
export const RootRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={AuthPage} />
          {/*<Route path="/" component={MainPage} />*/}
        </Switch>
      </BrowserRouter>
    </>
  );
};
