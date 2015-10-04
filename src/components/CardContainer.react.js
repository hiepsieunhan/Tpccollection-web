import React, { Component, PropTypes } from 'react';
import {AppBar} from 'material-ui';

const requireMessage = 'This field is required';

export default class CardContainer extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    const children = this.props.children;
    const style = {
      root: {
        boxShadow: '2px 2px 2px 2px #BBBBBB'
      }
    }
    return (
      <div style={style.root}>
        <AppBar title={this.props.title}/>
        {children}
      </div>
    );
  }
}
