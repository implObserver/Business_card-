import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './ui/App'
import { Provider } from 'mobx-react';
import { stores } from './model/store/Store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider {...stores}>
      <App />
    </Provider>
  </React.StrictMode>,
);