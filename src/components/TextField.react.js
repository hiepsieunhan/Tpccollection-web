import React, { Component, PropTypes } from 'react';
import mui, { TextField as MuiTextField} from 'material-ui';

const ThemeManager = require('material-ui/lib/styles/theme-manager');
const requireMessage = 'This field is required';

export default class TextField extends Component {

  static propTypes = {
    onBlur: PropTypes.func,
    required: PropTypes.bool.isRequired,
    label: PropTypes.string,
    hint: PropTypes.string
  };

  state = {
    requireMessage: requireMessage,
    isRequired: false
  };

  render() {
    const True = true;
    return (
      <MuiTextField
        ref="TextField"
        hintText={this.props.hint || ''}
        errorText={this.state.isRequired ? this.state.requireMessage : ''}
        floatingLabelText={this.props.label || ''}
        onChange={this.handleIput}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        fullWidth={True}
      />
    );
  }

  handleIput = (event) => {
    let input = this.refs.TextField.getValue().trim();
    if (input !== '') {
      this.setState({requireMessage : ''});
    } else {
      this.setState({requireMessage : requireMessage});
    }
  }

  getValue = () => {
    return this.refs.TextField.getValue().trim();
  }

  onFocus = (event) => {
    if (!this.state.isRequired && this.props.required) {
        this.setState({isRequired: true});
    }
  }

  onBlur = (event) => {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }
}
