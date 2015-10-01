import React, {Component} from 'react';
import TextField from '../../components/TextField.react';

export default class Demo extends Component {

  render() {
    const props = {
      required: true,
      hint: 'Nguyen',
      label: 'Ho'
    }
    return (
      <TextField {...props} />
    );
  }
}
