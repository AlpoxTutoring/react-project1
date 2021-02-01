import Header from 'components/Header/Header';
import MainContainer from 'container/main/MainContainer';
import Register from 'container/register/Register';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <MainContainer />
      <Route path="/register" component={Register} />
    </>
  );
}

export default App;
