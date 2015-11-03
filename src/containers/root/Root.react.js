import React, { Component } from 'react';
import Menu from '../../components/menu/Menu.react';
import HomePage from '../pages/HomePage.react';

export default class Root extends Component {

  state = {
    active: window.location.pathname.replace('/', ''),
    hasNoticed: false
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

  componentDidMount = () => {
    //this.noticeUser();
  }

  componentDidUpdate = () => {
    let path = this.getCurrentPath();
    if (path !== this.state.active) {
      this.setState({
        active: path
      });
    }
    //this.noticeUser();
  }

  noticeUser = () => {
    let path = this.getCurrentPath();
    if (path === 'main' && !this.state.hasNoticed) {
      this.setState({
        hasNoticed: true
      });
    }
  }

  getCurrentPath = () => {
    return window.location.pathname.replace('/', '');
  }
}
