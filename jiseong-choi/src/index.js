import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
const { githubURI, userName } = require('./info');
console.log(`Let's go with ${githubURI}/${userName}`);