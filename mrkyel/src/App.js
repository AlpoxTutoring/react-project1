import Layout from 'container/layout/Layout';
import Register from 'pages/register/Register';
import { Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import './Reset.jsx';
import reset from 'Reset.jsx';
import FreeBoard from 'pages/freeboard/FreeBoard.js';
import WriteBoard from 'pages/writeboard/writeboard.js';

function App() {
  return (
    <>
      <Global styles={reset} />
      <Route exact path="/" component={Layout} />
      <Route path="/register" component={Register} />
      <Route path="/freeboard" component={FreeBoard} />
      <Route path="/writeboard" component={WriteBoard} />
    </>
  );
}

export default App;
