import React, { Component } from 'react';
import TextField from '../../components/TextField.react';
import Utils from '../../utils/supportedFuncs';
import { RaisedButton } from 'material-ui';

export default class EditInfoPage extends Component {

  render() {

    const props = {
      email: {
        required: true,
        label: 'Địa chỉ email',
        hint: 'example@gmail.com',
        validate: Utils.validateEmail
      },
      emailInputStyle: {
        display: 'block',
        width: '80%',
        marginBottom: '30px'
      }
    }

    return (
      <div className="get-info-container">
        <h1> Sửa thông tin  </h1>
        <p>
          Hãy điền địa chỉ email mà bạn đăng ký trong thông tin hồ sơ.
        </p>
        <p>
          Link để sửa thông tin sẽ được gửi tới địa chỉ email mà bạn cung cấp.
        </p>
        <div style={props.emailInputStyle}><TextField ref="Email"{...props.email}/> </div>
        <RaisedButton label="Gửi" secondary onClick={this.submitEmail}/>
      </div>
    );
  }

  submitEmail = () => {
    let email = this.refs.Email.getValue();
    console.log(email);
  }

}
