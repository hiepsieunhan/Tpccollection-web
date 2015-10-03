import React, {Component} from 'react';
import TextField from '../../components/TextField.react';

export default class Demo extends Component {

  render() {
    const props = {
      firstName: {
        required: true,
        hint: 'Nguyen',
        label: 'Ho'
      },
      midName : {
        hint: 'Van',
        label: 'Ten dem'
      },
      lastName: {
        required: true,
        hint: 'A',
        label: 'Ten'
      }
    }
    return (
      <ul style={{
        'list-style-type': 'none',
        'margin': 'auto',
        'width': '50%'
      }}>
        <li style={{'display': 'inline-block', 'width': '33%', 'vertical-align': 'middle'}}>
            <TextField ref="FirstName" {...props.firstName}/>
        </li>
        <li style={{'display': 'inline-block', 'width': '33%', 'vertical-align': 'middle'}}>
            <TextField ref="MidName" {...props.midName}/>
        </li>
        <li style={{'display': 'inline-block', 'width': '33%', 'vertical-align': 'middle'}}>
            <TextField ref="LastName" {...props.lastName}/>
        </li>
      </ul>
    );
  }

  getData = () => {
    const data = {
      firstName: this.refs.FirstName.getValue(),
      midName: this.refs.MidName.getValue(),
      lastName: this.refs.LastName.getValue()
    }
    return {
      data: data,
      isValid: this.validateData(data)
    }
  }

  validateData = (data) => {
    return data.firstName && data.lastName ? true : false;
  }

}
