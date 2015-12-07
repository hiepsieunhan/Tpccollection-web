import thunk from 'redux-thunk';
import checkEmail from './email';
import $ from 'jquery';

/*
  action types
*/

export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SAVE_FORM = 'SAVE_FORM';
export const FORM_TYPE = {
              EDIT: 'EDIT',
              NEW: 'NEW'
            };

/*
  action creators
*/

export const saveFormData = (data, saveType) => {
  return {
    type: SAVE_FORM,
    saveType: saveType,
    data: data
  }
}

const requestSubmitForm = (submitType) => {
  return {
    type: SUBMIT_FORM,
    submitType: submitType
    start: true
  }
}

const finishSubmitForm = (isSuccess, submitType) => {
  return {
    type: SUBMIT_FORM,
    finish: true,
    isSuccess: isSuccess,
    submitType: submitType
  }
}

const submitNewForm = (data, dispatch) => {
  dispatch(requestSubmitForm(FORM_TYPE.NEW));
  $.ajax({
    method: 'POST',
    url: 'https://api.myjson.com/bins/3mcwl',
    data: data
  }).done(data => {
    dispatch(finishSubmitForm(true, FORM_TYPE.NEW));
  }).fail(() => {
    dispatch(finishSubmitForm(false, FORM_TYPE.NEW));
  });
}

const submitEditedForm = () => dispatch => {
  // same as above
}

export const submitForm = (data, formType) => dispatch => {
  const email = data.contactInfo.email;
  // submit new form
  let callback = null;
  if (formType === FORM_TYPE.NEW)
    callback = submitNewForm;
  else
    callback = submitEditedForm;

  if (callback) {
    checkEmail(email, formType, () => {
      callback(data, dispatch);
    }, dispatch);
  }
}

