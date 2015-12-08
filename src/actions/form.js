import thunk from 'redux-thunk';
import checkEmail from './email';
import $ from 'jquery';
import server from './serverConfig';

/*
  action types
*/

export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SAVE_FORM = 'SAVE_FORM';
export const FORM_TYPE = {
              EDIT: 'EDIT',
              NEW: 'NEW'
            };
export const GET_USER_DATA = 'GET_USER_DATA';

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
    submitType: submitType,
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
    url: `${server.url}/user`,
    data: data
  }).done(data => {
    dispatch(finishSubmitForm(true, FORM_TYPE.NEW));
  }).fail(() => {
    dispatch(finishSubmitForm(false, FORM_TYPE.NEW));
  });
}

const submitEditedForm = (data, dispatch, id) => {
  dispatch(requestSubmitForm(FORM_TYPE.EDIT));
  $.ajax({
    method: 'PUT',
    url: `${server.url}/user/${id}`,
    data: data
  }).done(data => {
    dispatch(finishSubmitForm(true, FORM_TYPE.EDIT));
  }).fail(() => {
    dispatch(finishSubmitForm(false, FORM_TYPE.EDIT));
  });
}

export const submitForm = (data, formType, id = null) => dispatch => {
  const email = data.contactInfo.email;
  // submit new form
  let callback = null;
  if (formType === FORM_TYPE.NEW)
    callback = submitNewForm;
  else
    callback = submitEditedForm;

  if (callback) {
    dispatch(
      checkEmail(email, formType, () => {
        dispatch(callback(data, dispatch, id));
      })
    );
  }
}

const requestGetUserData = () => {
  return {
    type: GET_USER_DATA,
    start: trues
  }
}

const finishGetUserData = (data = null) => {
  return {
    type: GET_USER_DATA,
    finish: true,
    data: data
  }
}

export const getUserData = id => dispatch => {
  dispatch(requestGetUserData());
  $.ajax({
    method: 'GET',
    url: `${server.url}/user/${id}`
  }).done(data => {
    dispatch(finishGetUserData(data));
  }).fail(() => {
    dispatch(finishGetUserData());
  });
}
