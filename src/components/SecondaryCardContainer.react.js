import React, { Component, PropTypes } from 'react';

export default class CardContainer extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.object,
    leftButton: PropTypes.shape({
      onClick: PropTypes.func.isRequired,
      title: PropTypes.string
    })
  }

  render() {
    const children = this.props.children;
    const style = {
      root: {
        boxShadow: '1px 1px 1px 1px #BBBBBB',
        marginBottom: '20px'
      },
      header: {
        background: '#9E9E9E',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '20px',
        fontWeight: 400,
        color: '#FFFFFF',
        padding: '10px',
        paddingLeft: '20px'
      },
      leftButton: {
        marginRight: '20px'
      }
    }

    let leftButton = undefined;
      if (this.props.leftButton) {
        leftButton = <button style={style.leftButton} onClick={this.props.leftButton.onClick}> {this.props.leftButton.title} </button>
    }
    return (
      <div style={style.root}>
        <div style={style.header}>
          {leftButton}
          {this.props.title}
        </div>
        <div style={this.props.style}>
          {children}
        </div>
      </div>
    );
  }
}
