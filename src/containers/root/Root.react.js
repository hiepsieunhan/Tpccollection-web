import React, { Component } from 'react';
import Menu from '../../components/menu/Menu.react';
import SideBar from '../../components/sideBar/SideBar.react';

export default class Root extends Component {
  render() {
  const {children} = this.props;
    return (
      <div>
        <Menu/>
        <SideBar/>
        {children}
      </div>
    );
  }
}
