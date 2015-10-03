import React, { Component, PropTypes } from 'react';
import mui, { SelectField } from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();

const LinkedStateMixin = React.addons.LinkedStateMixin;

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
