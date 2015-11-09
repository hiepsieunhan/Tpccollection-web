import React, { Component, PropTypes } from 'react';
import { IconButton } from 'material-ui';

export default class SecondaryCardContainer extends Component {

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
        /*background: '#00bcd4',*/
        fontFamily: 'Roboto, sans-serif',
        fontSize: '20px',
        fontWeight: 400,
        color: '#424242',
        verticalAlign: 'middle'
      },
      leftButton: {
        marginRight: '20px'
      }
    }

    let leftButton = undefined;
    if (this.props.leftButton) {
        leftButton = <IconButton iconClassName="material-icons" tooltip="Thêm mới"  tooltipPosition = "bottom-right" onClick={this.props.leftButton.onClick}>add_circle</IconButton>
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
