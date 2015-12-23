import React, { Component, PropTypes } from 'react';
import Form from '../../components/form/Form.react';
import SideBar from '../sideBar/SideBar.react';

import { connect } from 'react-redux';
import {
  FORM_TYPE,
  saveFormData,
  submitForm
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
        <div className="main-content">
          <Form ref="Form" isSubmitting={this.props.savedForm.isSubmit} onSubmit={this.onSubmit} showingPage={this.props.savedForm.showingPage} initData={this.props.savedForm.data}/>
        </div>
      </div>
    );
  }

  componentWillUnmount = () => {
    const {
      dispatch
    } = this.props;
    const data = this.refs.Form.getData().data;
    dispatch(saveFormData(data, FORM_TYPE.NEW));
  }

  onSubmit = (data) => {
    const {
      dispatch
    } = this.props;
    dispatch(submitForm(data, FORM_TYPE.NEW));
  }

}

const select = state => {
  return {
    savedForm: state.form.newForm
  }
}

export default connect(select)(MainPage);
