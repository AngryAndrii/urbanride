import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { persistor, store } from './redux/store.js';
import { GlobalStyle } from './GlobalStyle.js';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/ubanride/">
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
