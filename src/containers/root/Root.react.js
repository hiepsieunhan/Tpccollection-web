import React, { Component, PropTypes } from 'react';
import mui, { RaisedButton, TextField } from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();

export default class Root extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  render() {
    const {children} = this.props;
    return (
      <div>
        <TextField
          hintText="Hint Text"
          floatingLabelText="Floating Label Text" />
        <p>This is root Component</p>
        {children}
      </div>
    );
  }
}
