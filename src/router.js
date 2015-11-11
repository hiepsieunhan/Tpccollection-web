import React from 'react';
import { Router } from 'react-router';
import { ReduxRouter } from 'redux-router';

import routes from './routes';

export default class AppRouter extends React.Component {
  render() {
    return (
      <ReduxRouter>
        {routes}
      </ReduxRouter>
    );
  }
}
