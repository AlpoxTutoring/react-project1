import './App.css';
import Login from 'component/Login';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route path="/" component={Login} />
    </>
  );
}

export default App;
