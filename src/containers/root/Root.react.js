import React, { Component } from 'react';
import Menu from '../../components/menu/Menu.react';

export default class Root extends Component {
  render() {
  const {children} = this.props;
    return (
      <div style={{margin: 0, padding: 0}}>
        <Menu/>
        {children}
      </div>
    );
  }
}
