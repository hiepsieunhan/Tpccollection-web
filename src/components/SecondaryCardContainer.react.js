import React, { Component, PropTypes } from 'react';

export default class CardContainer extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.object
  }

  render() {
    const children = this.props.children;
    const style = {
      root: {
        boxShadow: '1px 1px 1px 1px #BBBBBB',
        marginBottom: '20px'
      },
      header: {
        background: '#00bcd4',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '20px',
        fontWeight: 400,
        color: '#FFFFFF',
        padding: '10px',
        paddingLeft: '20px'
      }
    }
    return (
      <div style={style.root}>
        <div style={style.header}>
          {this.props.title}
        </div>
        <div style={this.props.style}>
          {children}
        </div>
      </div>
    );
  }
}
