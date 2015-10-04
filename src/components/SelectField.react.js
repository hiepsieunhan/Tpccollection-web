import React, { Component, PropTypes } from 'react';
import mui, { SelectField as MuiSelectField   } from 'material-ui';

export default class SelectField extends Component {

  static propTypes = {
    onChange: PropTypes.func,
    menuItems: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired
  }

  state = {
    //selectValue: this.props.menuItems[0].payload
  }

  render() {
    return (
      <MuiSelectField
        value={this.state.selectValue}
        floatingLabelText={this.props.label}
        onChange={this._handleSelectValueChange.bind(null, 'selectValue')}
        menuItems={this.props.menuItems} />
    );
  }

  _handleSelectValueChange = (name, e) => {
    let change = {};
    change[name] = e.target.value;
    this.setState(change);

    if (this.props.onChange) this.props.onChange(this.getValue());
  }

  getValue = () => {
    return this.state.selectValue;
  }
};

