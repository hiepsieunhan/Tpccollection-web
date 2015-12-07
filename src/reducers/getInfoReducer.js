import {
  GET_EDIT_LINK
} from '../actions/email';

const getInfoReducer = (state = {
    isSubmitting: false,
    showingMessge: null
  },
  action) => {
  switch (action.type) {
    case GET_EDIT_LINK:
      if (action.start) {
        return {
          ...state,
          isSubmitting: true,
        }
      } else if (action.finish) {
        return {
          isSubmitting: false,
          showingMessge: (action.isSuccess ? 'success' : 'error')
        }
      }
      break;
  }
  return state;
}

export default getInfoReducer;
