import thunk from 'redux-thunk';
import $ from 'jquery';

/*
  action types
*/

export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SAVE_FORM = 'SAVE_FORM';
export const SAVE_FORM_TYPE = {EDIT: 'EDIT', NEW: 'NEW'};

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

const requestSubmitForm = () => {
  return {
    type: SUBMIT_FORM,
    start: true
  }
}

const finishSubmitForm = (status, data) => {
  return {
    type: SUBMIT_FORM,
    finish: true
  }
}
