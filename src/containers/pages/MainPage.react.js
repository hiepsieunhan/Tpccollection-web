import React, { Component, PropTypes } from 'react';
import Form from '../../components/form/Form.react';
import SideBar from '../sideBar/SideBar.react';

import { connect } from 'react-redux';
import {
  SAVE_FORM_TYPE,
  saveFormData
} from '../../actions/form';


class MainPage extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    savedForm: PropTypes.object
  }

  render() {
    return (
      <div className="div-wrapper">
        <SideBar/>
        <Form ref="Form" onSubmit={this.onSubmit} showingPage={this.props.savedForm.showingPage} initData={this.props.savedForm.data}/>
      </div>
    );
  }

  componentWillUnmount = () => {
    const {
      dispatch
    } = this.props;
    console.log('FUck!!');
    console.log(this.refs);
    const data = this.refs.Form.getData().data;
    dispatch(saveFormData(data, SAVE_FORM_TYPE.NEW));
  }

  onSubmit = (data) => {
    console.log('SubmitForm!!!!');
  }

}

const select = state => {
  return {
    savedForm: state.form.newForm
  }
}

export default connect(select)(MainPage);
