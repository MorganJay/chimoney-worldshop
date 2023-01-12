import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { store } from './app/store';
import GlobalStyle from './GlobalStyles';

const persistor = persistStore(store);

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </>
);
