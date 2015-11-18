import React, { Component, PropTypes } from 'react';
import TextField from '../TextField.react';
import Utils from '../../utils/supportedFuncs';

export default class ContactInfo extends Component {

  static propTypes = {
    initData: PropTypes.object
  }

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

    const initData = this.props.initData;

    return (
      <div>
        <ul>
          <li style={{width: '30%', marginRight: '20%'}}>
            <TextField initData={initData && initData.email ? initData.email : null} {...props.email} ref="Email"/>
          </li>
          <li style={{...style.li, width: '30%'}}>
            <TextField initData={initData && initData.phone ? initData.phone : null} {...props.phone} ref="Phone"/>
          </li>
        </ul>
        <div style={style.address}>
          <TextField initData={initData && initData.address ? initData.address : null}{...props.address} ref="Address"/>
        </div>
        <div style={style.socialUrl}>
          <TextField initData={initData && initData.socialUrl ? initData.socialUrl : null} {...props.socialUrl} ref="SocialUrl"/>
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
