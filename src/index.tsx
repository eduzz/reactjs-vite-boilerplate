import React from 'react';

import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ThemeProvider from '@eduzz/houston-ui/styles/ThemeProvider';

import App from '@/App';
import { store } from '@/redux/store';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
