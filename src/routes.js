                                                                                  import React from 'react';
import { Route, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Root from './containers/root/Root.react';
import MainContainer from './containers/pages/MainContainer.react';
import HomePage from './containers/pages/HomePage.react';

injectTapEventPlugin();

export default (
  <Route path="/" components={Root}>
    <IndexRoute component={HomePage}/>
    <Route path="main" components={MainContainer}/>
    <Route path="home" components={HomePage}/>
  </Route>
);

