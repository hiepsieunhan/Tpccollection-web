import React, { Component, PropTypes } from 'react';
import Form from '../../components/form/Form.react';
import SideBar from '../sideBar/SideBar.react';

import { connect } from 'react-redux';
import {
  FORM_TYPE,
  saveFormData,
  submitForm,
  getUserData
} from '../../actions/form';

class EditPage extends Component {

  static propTypes = {
    params: PropTypes.object,
    dispatch: PropTypes.func,
    savedForm: PropTypes.object
  }

  render() {
    const form = this.props.savedForm.isLoading ? null : <Form ref="Form" isSubmitting={this.props.savedForm.isSubmit} onSubmit={this.onSubmit} showingPage={this.props.savedForm.showingPage} initData={this.props.savedForm.data}/>;
    return (
      <div className="div-wrapper">
        <SideBar/>
        {form}
      </div>
    );
  }

  componentWillMount = () => {
    let data = this.props.savedForm.data;
    const {
      dispatch
    } = this.props;
    const userId = this.props.params.id;
    if (!data) {
      dispatch(getUserData(userId));
    }
  }

  componentWillUnmount = () => {
    const {
      dispatch
    } = this.props;
    const data = this.refs.Form.getData().data;
    dispatch(saveFormData(data, FORM_TYPE.EDIT));
  }

  onSubmit = (data) => {
    const {
      dispatch
    } = this.props;
    dispatch(submitForm(data, FORM_TYPE.EDIT, this.props.params.id));
  }

}


const select = state => {
  return {
    savedForm: state.form.editForm
  }
}

export default connect(select)(EditPage);
