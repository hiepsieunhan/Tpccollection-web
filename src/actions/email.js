import thunk from 'redux-thunk';
import $ from 'jquery';
import server from './serverConfig';

/*
  action types
*/

export const CHECK_EMAIL = 'CHECK_EMAIL';
export const GET_EDIT_LINK = 'GET_EDIT_LINK';

/*
  action creators
*/

const requestCheckEmail = (formType) => {
  return {
    type: CHECK_EMAIL,
    formType: formType,
    start: true
  }
}

const finishCheckEmail = (isSuccess, formType) => {
  return {
    type: CHECK_EMAIL,
    finish: true,
    formType: formType,
    isSuccess: isSuccess
  }
}


// checkEmail before upload data to server
export const checkEmail = (email, formType, callback) => dispatch => {
  // do stuff
  dispatch(requestCheckEmail(formType));
  $.ajax({
    method: 'GET',
    url: `${server.url}/user/check/${email}`;
  }).done(data => {
    dispatch(finishCheckEmail(true, formType));
    callback();
  }).fail(() => {
    dispatch(finishCheckEmail(false, formType));
  });
}

const requestGetEditLink = () => {
  return {
    type: GET_EDIT_LINK,
    start: true
  }
}

const finishGetEditLink = (isSuccess) => {
  return {
    type: GET_EDIT_LINK,
    finish: true,
    isSuccess: isSuccess
  }
}

export const getEditLink = email => dispatch => {
  // send email to server to get link
  dispatch(requestGetEditLink());
  $.ajax({
    method: 'POST',
    url: `${server.url}/user/send-email`,
    data: {
      email: email
    }
  }).done(data => {
    dispatch(finishGetEditLink(true));
  }).fail(() => {
    dispatch(finishGetEditLink(false));
  });
}
