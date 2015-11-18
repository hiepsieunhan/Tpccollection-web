import React, { Component, PropTypes } from 'react';
import mui, { SelectField as MuiSelectField   } from 'material-ui';

export default class SelectField extends Component {

  static propTypes = {
    onChange: PropTypes.func,
    menuItems: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    initData: PropTypes.string
  }

  state = {
    selectValue: this.props.initData  ? this.props.initData : undefined
  }

  render() {
    const True = true;
    return (
      <MuiSelectField
        fullWidth={True}
        value={this.state.selectValue}
        floatingLabelText={this.props.label}
        onChange={this._handleSelectValueChange.bind(null, 'selectValue')}
        menuItems={this.props.menuItems} />
    );
  }

  componentWillReceiveProps = (nextProps) => {
    const menu = nextProps.menuItems;
    const curValue = this.getValue();

    if (!curValue) return;
    for (var i = 0; i < menu.length; i++) {
      if (menu[i].payload === curValue) return;
    }
    this.setState({selectValue: undefined});
  }

  _handleSelectValueChange = (name, e) => {
    let change = {};
    change[name] = e.target.value;
    this.setState(change);

    if (this.props.onChange) this.props.onChange(e.target.value);
  }

  getValue = () => {
    return this.state.selectValue;
  }
};

