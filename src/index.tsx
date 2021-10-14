import React from 'react';

import ReactDOM from 'react-dom';

import ThemeProvider from '@eduzz/houston-ui/styles/ThemeProvider';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
