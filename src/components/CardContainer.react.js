import React, { Component, PropTypes } from 'react';
import {AppBar} from 'material-ui';

export default class CardContainer extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.object
  }

  render() {
    const children = this.props.children;
    const style = {
      root: {
        boxShadow: '2px 2px 2px 2px #BBBBBB',
        background: '#FFF'
      }
    }
    return (
      <div style={style.root}>
        <AppBar title={this.props.title}/>
        <div style={{...this.props.style, padding: '20px'}}>
          {children}
        </div>
      </div>
    );
  }
}
