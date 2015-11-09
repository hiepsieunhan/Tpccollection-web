import React from 'react';
import { Route, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Root from './containers/root/Root.react';
import MainPage from './containers/pages/MainPage.react';
import HomePage from './containers/pages/HomePage.react';
import GetInfoPage from './containers/pages/GetInfoPage.react';
import EditPage from './containers/pages/EditPage.react';

injectTapEventPlugin();

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={HomePage}/>
    <Route path="main" component={MainPage}/>
    <Route path="home" component={HomePage}/>
    <Route path="edit-info">
      <IndexRoute component={GetInfoPage}/>
      <Route path=":id" component={EditPage}/>
    </Route>
  </Route>
);

