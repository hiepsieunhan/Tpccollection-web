import React, { Component, PropTypes } from 'react';
import mui, { RaisedButton, TextField} from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();

const requireMessage = 'This field is required';

export default class Demo extends Component {

  static propTypes = {
    required: PropTypes.bool.isRequired,
    label: PropTypes.string,
    hint: PropTypes.string
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
    console.log(this.props.required);
    return (
      <div>
        <TextField
          ref="TextField"
          hintText={this.props.hint || ''}
          errorText={this.state.isRequired && this.state.requireMessage}
          floatingLabelText={this.props.label || ''}
          onChange={this.handleIput}
          onFocus={this.onFocus}
        />
      </div>
    );
  }

  handleIput = (event) => {
    console.log('fuck');
    let input = this.refs.TextField.getValue();
    console.log(input);
    if (input !== '') {
      this.setState({requireMessage : ''});
    } else {
      this.setState({requireMessage : requireMessage});
    }
  }

  onFocus = (event) => {
    if (!this.state.isRequired && this.props.required) {
        this.setState({isRequired: true});
    }
  }
}
