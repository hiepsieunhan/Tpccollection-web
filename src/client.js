import React, { Component, PropTypes } from 'react';
import { Provider, connect } from 'react-redux';
import router from './router';
import routes from './routes';
import createStore from './utils/createStore';
import { ReduxRouter } from 'redux-router';
import ReactDOM from 'react-dom';

import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

require('./style/style.css');

const store = createStore();


ReactDOM.render(
  <div>
    <Provider store={store}>
      <ReduxRouter>
        {routes}
      </ReduxRouter>
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} visibleOnLoad={false}/>
    </DebugPanel>
  </div>
  ,document.getElementById('root')
);


/*import React from 'react';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Router from './router';
import createStore from './utils/createStore';

const store = createStore();
const history = createBrowserHistory();

React.render(
  <Provider store={store}>
    {() => (<Router {...{history}} />)}
  </Provider>,
  document.getElementById('root')
);
*/
