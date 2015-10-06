import React from 'react';
import { Route } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Root from './containers/root/Root.react';
import Demo from './containers/demo/Demo.react';
import BasicIno from './containers/demo/BasicInfo.react';

injectTapEventPlugin();

export default (
  <Route path="/" components={Root}>
    <Route path="demo" components={Demo}/>
    <Route path="basic-info" components={BasicIno}/>
  </Route>
);
