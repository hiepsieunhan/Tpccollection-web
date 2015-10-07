import React, {Component} from 'react';
import TextField from '../../components/TextField.react';

export default class Name extends Component {

  render() {
    const props = {
      firstName: {
        required: true,
        hint: 'Nguyễn',
        label: 'Họ'
      },
      midName : {
        hint: 'Hải',
        label: 'Tên đệm'
      },
      lastName: {
        required: true,
        hint: 'Dương',
        label: 'Tên'
      }
    }

    const style = {
      ul: {
        'listStyleType': 'none',
        'padding': 0,
         maxWidth: '800px'
      },
      li: {
        'display': 'inline-block',
        'width': '30%',
        'verticalAlign': 'middle',
        'marginRight': '3%'
      }
    }

    const onBlurInput = (event) => {
      let values = event.target.value.trim().split(/\s+/g);
      let result = values.map(value => {
        return value.charAt(0).toUpperCase() + value.slice(1);
      }).join(' ');
      event.target.value = result;
    }

    return (
      <ul style={style.ul}>
        <li style={style.li}>
            <TextField ref="FirstName" {...props.firstName} onBlur={onBlurInput}/>
        </li>
        <li style={style.li}>
            <TextField ref="MidName" {...props.midName} onBlur={onBlurInput}/>
        </li>
        <li style={style.li}>
            <TextField ref="LastName" {...props.lastName} onBlur={onBlurInput}/>
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
