import {
  SUBMIT_FORM,
  SAVE_FORM,
  FORM_TYPE,
  GET_USER_DATA
} from '../actions/form';

import {
  CHECK_EMAIL
} from '../actions/email';

const setData = (state, type, data) => {
  if (type === FORM_TYPE.NEW) {
    return {...state, newForm: {...state.newForm, data: data}}
  } else if (type === FORM_TYPE.EDIT) {
    return {...state, editForm: {...state.editForm, data: data}}
  }
  return state;
}

const setShowingPage = (state, type, newPage) => {
  if (type === FORM_TYPE.NEW) {
    console.log({...state, newForm: {...state.newForm, showingPage: newPage}});
    return {...state, newForm: {...state.newForm, showingPage: newPage}}
  } else if (type === FORM_TYPE.EDIT) {
    return {...state, editForm: {...state.editForm, showingPage: newPage}}
  }
  return state;
}

const setIsUpload = (state, type, newValue) => {
  if (type === FORM_TYPE.NEW) {
    return {...state, newForm: {...state.newForm, isUpload: newValue}}
  } else if (type === FORM_TYPE.EDIT) {
    return {...state, editForm: {...state.editForm, isUpload: newValue}}
  }
  return state;
}

const formReducer = (state = {
    newForm: {
      isUpload: false,
      showingPage: 'form',
      data: null
    },
    editForm: {
      isUpload: false,
      showingPage: 'form',
      data: null,
      isLoading: true
    }
  },
  action) => {
  switch (action.type) {

    case SAVE_FORM:
      return setData(state, action.saveType, action.data);
      break;

    case SUBMIT_FORM:
      if (action.start) {
        // set isSubmitting to true to prevent user click to submit button
        return setIsUpload(state, action.submitType, true);
      } else if (action.finish) {
        // reset isSubmitting to false
        state = setIsUpload(state, action.submitType, false);
        // if success, move to thank page else alert a message
        if (action.isSuccess) {
          return setShowingPage(state, action.submitType, 'thank');
        } else {
          alert('Fail to submit form!');
        }
      }
      break;

    case CHECK_EMAIL:
      if (action.start) {
        return setIsUpload(state, action.submitType, true);
      } else if (action.finish) {
        if (!action.isSuccess) {
          alert('Your email might be used by the other, please use other email for submitting!');
        }
        return setIsUpload(state, action.submitType, false);
      }
      break;
    case GET_USER_DATA:
      if (action.finish) {
        return {...state, editForm: {...state.editForm, data: action.data, isLoading: false}}
      }
      break;
  }
  return state;
}

export default formReducer;
