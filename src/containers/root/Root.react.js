import React, { Component, PropTypes } from 'react';
import Menu from '../../components/menu/Menu.react';
import HomePage from '../pages/HomePage.react';
import { connect } from 'react-redux';

var getCurrentPath = () => {
  console.log(window.location.pathname);
  return window.location.pathname.replace('/', '') || 'home';
}

class Root extends Component {

  static propTypes = {
    location: PropTypes.string
  }

  state = {
    active: ''
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
    this.setState({
      active: this.getCurrentPage()
    })
  }

  componentDidUpdate = () => {
    let path = this.getCurrentPage();
    if (path !== this.state.active) {
      this.setState({
        active: path
      });
    }
  }

  getCurrentPage = () => {
    const location = this.props.location.trim();
    if (location === '/') return 'home';
    const paths = location.split('/');
    return paths[1];
  }
}


const select = (state) => {
  return {
    location: state.router.location.pathname
  }
}

export default connect(select)(Root);
