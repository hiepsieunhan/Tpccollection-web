import React, { Component, PropTypes } from 'react';
import mui, { SelectField } from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();

const requireMessage = 'This field is required';

export default class Demo extends Component {

  static propTypes = {
  };

  state = {
    requireMessage: requireMessage,
    isRequired: false
  };

  static childContextTypes = {
    muiTheme: PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  render() {
    return (
    );
  }

  getValue = () => {
  }
}
