import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { BoardRouter } from "routers";
import { Layout } from "components";
import { theme } from 'common/theme';

const RootRouter = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Switch>
          <Route path="/" component={BoardRouter} />
        </Switch>
      </Layout>
    </ThemeProvider>
  );
};

export default RootRouter;
