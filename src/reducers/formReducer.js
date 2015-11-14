import {
  SUBMIT_FORM,
  SAVE_FORM,
  SAVE_FORM_TYPE
}
from '../actions/form';

const formReducer = (state = {
    newForm: {
      isUpload: false,
      showingPage: 'form',
      data: null
    },
    editForm: {
      isUpload: false,
      showingPage: 'form',
      data: null
    }
  },
  action) => {
  switch (action.type) {
    case SAVE_FORM: if (action.saveType === SAVE_FORM_TYPE.NEW) {
      const newForm = {...state.newForm, data: action.data};
      return {...state, newForm: newForm};
    } else if (action.saveType === SAVE_FORM_TYPE.EDIT) {
      const editForm = {...state.editForm, data: action.data};
      return {...state, editForm: editForm};
    }
    break;
  }
  return state;
}

export default formReducer;
