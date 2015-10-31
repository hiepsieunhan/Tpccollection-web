import React from 'react';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Router from './router';
import createStore from './utils/createStore';

require('./style/style.css');

const store = createStore();
const history = createBrowserHistory();

React.render(
  <Provider store={store}>
    {() => (<Router {...{history}} />)}
  </Provider>,
  document.getElementById('root')
);
