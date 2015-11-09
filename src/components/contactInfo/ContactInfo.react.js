import React, {Component} from 'react';
import TextField from '../TextField.react';
import Utils from '../../utils/supportedFuncs';

export default class ContactInfo extends Component {

  render() {
    const props = {
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
      address: {
        width: '80%'
      },
      socialUrl: {
        width: '80%'
      }
    }

    return (
      <div>
        <ul>
          <li style={{width: '30%', marginRight: '20%'}}>
            <TextField {...props.email} ref="Email"/>
          </li>
          <li style={{...style.li, width: '30%'}}>
            <TextField {...props.phone} ref="Phone"/>
          </li>
        </ul>
        <div style={style.address}>
          <TextField {...props.address} ref="Address"/>
        </div>
        <div style={style.socialUrl}>
          <TextField {...props.socialUrl} ref="SocialUrl"/>
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
      isValid: (email && address && Utils.validateEmail(email) ? true : false)
    }
  }

}
