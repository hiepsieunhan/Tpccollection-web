import React, {Component} from 'react';
import TextField from '../TextField.react';
import Utils from '../../utils/supportedFuncs';

export default class BasicInfo extends Component {

  render() {
    const data = {
      email: {
        required: true,
        label: 'Địa chỉ email',
        hint: 'example@gmail.com',
        validate: Utils.validateEmail
      },
      phone: {
        label: 'Số điện thoại',
        hint: '01646616936',
        validate: Utils.validatePhone
      },
      address: {
        required: true,
        label: 'Địa chỉ hiện tại',
        multiLine: true
      },
      socialUrl: {
        label: 'Link các trang mạng xã hội (Facebook, Twitter, Google+)',
        hint: 'https://www.facebook.com/buidohiep',
        multiLine: true
      }
    };

    const style = {
      root: {
        padding: '20px'
      },
      ul: {
        'listStyleType': 'none',
        'padding': 0
      },
      li: {
        'display': 'inline-block',
        'verticalAlign': 'middle'
      },
      address: {
        width: '80%'
      },
      socialUrl: {
        width: '80%'
      }
    }

    return (
      <div style={style.root}>
        <ul style={style.ul}>
          <li style={{...style.li, width: '30%', marginRight: '20%'}}>
            <TextField {...data.email} ref="Email"/>
          </li>
          <li style={{...style.li, width: '30%'}}>
            <TextField {...data.phone} ref="Phone"/>
          </li>
        </ul>
        <div style={style.address}>
          <TextField {...data.address} ref="Address"/>
        </div>
        <div style={style.socialUrl}>
          <TextField {...data.socialUrl} ref="SocialUrl"/>
        </div>
      </div>
    );
  }

  getData = () => {
    const email = this.refs.Email.getValue(),
      phone = this.refs.Phone.getValue(),
      address = this.refs.Address.getValue(),
      socialUrl = this.refs.SocialUrl.getValue();
    return {
      data: {
        email: email,
        phone: phone,
        address: address,
        socialUrl: socialUrl
      },
      isValid: (email && address ? true : false)
    }
  }

}
