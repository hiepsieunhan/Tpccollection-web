                                                                                  import React from 'react';
import { Route } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Root from './containers/root/Root.react';
import MainContainer from './containers/pages/MainContainer.react';
import ItemList from './containers/demo/ItemListDemo.react';
import BasicInfo from './containers/demo/BasicInfoDemo.react';
import ContactInfo from './containers/demo/ContactInfoDemo.react';

injectTapEventPlugin();

export default (
  <Route path="/" components={Root}>
    <Route path="main" components={MainContainer}/>
    <Route path="item-list" components={ItemList}/>
    <Route path="basic-info" components={BasicInfo}/>
    <Route path="contact-info" components={ContactInfo}/>
  </Route>
);

