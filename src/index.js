import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ErrorBoundary } from './ErrorBoundary';

global.APP_VERSION = process.env.REACT_APP_VERSION;
global.APP_NAME = process.env.REACT_APP_NAME;

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);
