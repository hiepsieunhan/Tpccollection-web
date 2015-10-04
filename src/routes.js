import React from 'react';
import { Route } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Root from './containers/root/Root.react';
import Demo from './containers/demo/Demo.react';

injectTapEventPlugin();

export default (
  <Route path="/" components={Root}>
    <Route path="demo" components={Demo}/>
  </Route>
);
