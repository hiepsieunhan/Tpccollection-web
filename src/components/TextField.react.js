import React, { Component, PropTypes } from 'react';
import mui, { TextField as MuiTextField} from 'material-ui';

const requireMessage = 'This field is required';
const formatErrMessage = 'The format is not correct';

export default class TextField extends Component {

  static propTypes = {
    onBlur: PropTypes.func,
    required: PropTypes.bool,
    multiLine: PropTypes.bool,
    label: PropTypes.string,
    hint: PropTypes.string,
    validate: PropTypes.func
  };

  state = {
    requireMessage: requireMessage,
    formatErrMessage: '',
    isRequired: false
  };

  render() {
    const True = true;
    return (
      <MuiTextField
        ref="TextField"
        hintText={this.props.hint || ''}
        errorText={(this.state.isRequired ? this.state.requireMessage : null) || this.state.formatErrMessage}
        floatingLabelText={this.props.label || ''}
        onChange={this.handleIput}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        fullWidth={True}
        multiLine={this.props.multiLine}
      />
    );
  }

  handleIput = (event) => {
    const input = this.refs.TextField.getValue().trim();
    if (input !== '') {
      this.setState({requireMessage : ''});
    } else {
      this.setState({requireMessage : requireMessage});
    }

    if (!this.props.validate) return;
    const formatErr = this.props.validate(input) ? '' : formatErrMessage;
    this.setState({formatErrMessage: formatErr});
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
