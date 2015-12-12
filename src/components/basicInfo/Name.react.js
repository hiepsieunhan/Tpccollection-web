import React, {
                Component,
                PropTypes
              } from 'react';
import TextField from '../../components/TextField.react';

export default class Name extends Component {

  static propTypes = {
    initData: PropTypes.object
  }

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

    const initData = this.props.initData;

    return (
      <ul style={style.ul}>
        <li style={style.li}>
            <TextField initData={initData && initData.firstName ? initData.firstName : null} ref="FirstName" {...props.firstName} onBlur={this.onBlurInput}/>
        </li>
        <li style={style.li}>
            <TextField initData={initData && initData.midName ? initData.midName : null} ref="MidName" {...props.midName} onBlur={this.onBlurInput}/>
        </li>
        <li style={style.li}>
            <TextField initData={initData && initData.lastName ? initData.lastName : null} ref="LastName" {...props.lastName} onBlur={this.onBlurInput}/>
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

  onBlurInput = (event) => {
    let values = event.target.value.trim().split(/\s+/g);
    let result = values.map(value => {
      let result = '';
      for (var i = 0; i < value.length; i++) {
        if (i == 0) result += value.charAt(i).toUpperCase();
          else result += value.charAt(i).toLowerCase();
      }
      return result;
      //return value.charAt(0).toUpperCase() + value.slice(1);
    }).join(' ');
    event.target.value = result;
  }

}
