import Layout from 'container/layout/Layout';
import Register from 'pages/register/Register';
import { Route, Switch } from 'react-router-dom';
import WriteBoard from 'pages/writeboard/writeboard.js';
import EmptyPage from 'pages/EmptyPage.js';
import Header from 'components/Header/Header';
import Login from 'pages/login/Login.js';
import FreeBoardRouter from 'routers/FreeBoardRouter.js';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/freeboard">
          <FreeBoardRouter />
        </Route>
        <Route path="/writeboard" component={WriteBoard} />
        <Route component={EmptyPage} />
      </Switch>
    </>
  );
}

export default App;
