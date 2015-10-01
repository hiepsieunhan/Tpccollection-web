import React from 'react';
import { Route } from 'react-router';

import Root from './containers/root/Root.react';
import Demo from './containers/demo/Demo.react';


export default (
  <Route path="/" components={Root}>
    <Route path="demo" components={Demo}/>
  </Route>
);
