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

    const style = {
      success: (this.props.state.showingMessge === 'success') ? {} : {display: 'none'},
      error: (this.props.state.showingMessge === 'error') ? {} : {display: 'none'}
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
        <p className="success-message" style={style.success}>
          Đường link để sửa thông tin đã được gửi vào email của bạn.
        </p>
        <p className="error-message" style={style.error}>
          Không thành công, hãy kiếm tra lại địa chỉ email bạn vừa điền.
        </p>
      </div>
    );
  }

  submitEmail = () => {
    let email = this.refs.Email.getValue();
    if (!Utils.validateEmail(email)) return;
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
