import Layout from 'container/layout/Layout';
import Register from 'pages/register/Register';
import { Route, Switch } from 'react-router-dom';
import { Global } from '@emotion/react';
import './Reset.jsx';
import reset from 'Reset.jsx';
import FreeBoard from 'pages/freeboard/FreeBoard.js';
import WriteBoard from 'pages/writeboard/writeboard.js';
import EmptyPage from 'pages/EmptyPage.js';
import Header from 'components/Header/Header';
import Login from 'pages/login/Login.js';

function App() {
  return (
    <>
      <Global styles={reset} />
      <Header />
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/freeboard" component={FreeBoard} />
        <Route path="/writeboard" component={WriteBoard} />
        <Route component={EmptyPage} />
      </Switch>
    </>
  );
}

export default App;
