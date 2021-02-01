import React from "react";
import { Switch, Route } from "react-router-dom";

import { BoardDetailPage, BoardListPage } from "pages";

export const BoardRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={BoardListPage} />
      <Route exact path="/boards/:id" component={BoardDetailPage} />
    </Switch>
  );
};
