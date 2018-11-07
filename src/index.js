import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Provider from './store/Provider';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
