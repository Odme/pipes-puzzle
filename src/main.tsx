import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import DataProvider from './context/DataContext/Provider';
import ServicesProvider from './context/ServicesContext/Provider';
import SocketProvider from './context/WebsocketContext/Provider';
import './index.css';

// connectSocket();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SocketProvider>
      <ServicesProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </ServicesProvider>
    </SocketProvider>
  </React.StrictMode>,
);
