import React, { Component, PropTypes } from 'react';
import TextField from '../../components/TextField.react';
import Utils from '../../utils/supportedFuncs';
import { RaisedButton } from 'material-ui';

import { connect } from 'react-redux';
import {
  GET_EDIT_LINK,
  getEditLink
} from '../../actions/email';


class EditInfoPage extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    state: PropTypes.object
  }

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
    const {
      dispatch
    } = this.props;
    dispatch(getEditLink(email));
  }

}

const select = state => {
  return {
    state: state.getInfo
  }
}

export default connect(select)(EditInfoPage);
