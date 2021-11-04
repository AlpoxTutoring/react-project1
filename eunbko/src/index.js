import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { RootRouter } from './routers';

ReactDOM.render(
  <React.StrictMode>
    <RootRouter />
  </React.StrictMode>,
  document.getElementById('root'),
);
