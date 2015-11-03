import React, { Component } from 'react';
import Menu from '../../components/menu/Menu.react';
import HomePage from '../pages/HomePage.react';

export default class Root extends Component {

  state = {
    active: 'home'
  }

  render() {
  const {children} = this.props;
    return (
      <div style={{margin: 0, padding: 0}}>
        <Menu active={this.state.active}/>
        {children}
      </div>
    );
  }

  componentDidUpdate = () => {
    let path = window.location.pathname.replace('/', '');
    if (path !== this.state.active) {
      this.setState({
        active: path
      });
    }
  }
}
