/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import './App.css';
import { Route } from 'react-router-dom';
import Header from 'component/Header';
import Footer from 'component/Footer';
import Layout from 'component/Layout';
function App() {
  return (
    <>
      <Global
        styles={css`
          @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
          ${emotionReset}
          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            -font-smoothing: antialiased;
            font-family: 'Noto Sans KR', sans-serif;
          }
        `}
      />
    </>
  );
}

export default App;
