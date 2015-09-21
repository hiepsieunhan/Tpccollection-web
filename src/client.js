import React from 'react';
import { Provider } from 'react-redux';
import History from 'react-router/lib/BrowserHistory';

import Router from './router';
import createStore from './utils/createStore';

const store = createStore();
const history = new History();

React.render(
  <Provider store={store}>
    {() => (<Router {...{history}} />)}
  </Provider>,
  document.getElementById('root')
);
