import React, { Component } from 'react';
import Menu from '../../components/menu/Menu.react';
import HomePage from '../pages/HomePage.react';

var getCurrentPath = () => {
  console.log(window.location.pathname);
  return window.location.pathname.replace('/', '') || 'home';
}

export default class Root extends Component {

  state = {
    active: getCurrentPath(),
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
    let path = getCurrentPath();
    if (path !== this.state.active) {
      this.setState({
        active: path
      });
    }
    //this.noticeUser();
  }

  noticeUser = () => {
    let path = getCurrentPath();
    if (path === 'main' && !this.state.hasNoticed) {
      this.setState({
        hasNoticed: true
      });
    }
  }
}
