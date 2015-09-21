import React, { Component } from 'react';

export default class Root extends Component {
  render() {
    const {children} = this.props;
    return (
      <div>
        <p>This is root Component</p>
        {children}
      </div>
    );
  }
}
