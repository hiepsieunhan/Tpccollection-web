import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import {
  RELOAD_SIDE_BAR,
  RELOAD_SIDE_BAR_CLASSES,
  RELOAD_SIDE_BAR_STUDENTS
} from '../actions';


const sideBarReducer = (state = {count: 0, isLoading: false, years: [], data:{}}, action) => {

  switch (action.type) {

    case RELOAD_SIDE_BAR:
      if (action.start || (action.finish && !action.success)) {
        return {
          ...state,
          isLoading: action.start ? true : false
        }
      }
      if (action.finish && action.success) {
        return {
          count: action.data.count,
          isLoading: false,
          years: action.data.years,
          data: {}
        }
      }
      break;

    case RELOAD_SIDE_BAR_CLASSES:
      if (action.finish && action.success) {
        const loadedYear = action.data;
        let newData = {};
        newData[loadedYear.year] = loadedYear.classes;
        return {
          ...state,
          data: {...state.data, ...newData}
        }
      }
      break;

    case RELOAD_SIDE_BAR_STUDENTS:
      if (action.finish && action.success) {
        const loadedClass = action.data;
        const id = loadedClass.year + '-' + loadedClass.class_;
        let newData = {}
        newData[id] = loadedClass.students;
        return {
          ...state,
          data: {...state.data, ...newData}
        }
      }
      break;
  }

  return state;
}

const reducer = combineReducers({
  router: routerStateReducer,
  sideBar: sideBarReducer
});


export default reducer;
