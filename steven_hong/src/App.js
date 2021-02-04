/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import './App.css';
import { Route } from 'react-router-dom';
import Header from 'component/Header';
import Footer from 'component/Footer';
function App() {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            -font-smoothing: antialiased;
          }
        `}
      />
      <Route path="/" component={Header} />
      <Route path="/d" component={Footer} />
    </>
  );
}

export default App;
