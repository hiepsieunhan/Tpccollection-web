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
        return {...state, isLoading: true}
      } else if (action.finish) {
        return {...state, isLoading: false, years: action.data.years, count: action.data.count, data:{}}
      }
      break;
    case RELOAD_SIDE_BAR_CLASSES:
      if (action.finish && action.success) {
        let newData = {};
        const loadedYear = action.data;
        newData[loadedYear.year] = {
          classes: loadedYear.classes,
          data: {}
        }
        return {...state, data: {...state.data, ...newData}}
      }
      break;
    case RELOAD_SIDE_BAR_STUDENTS:
      if (action.finish && action.success) {
        let newYear = {};

        const loadedClass = action.data;
        newYear[loadedClass.class_] = loadedClass.students;
        newYear = {classes: state.data[loadedClass.year].classes, data: {...state.data[loadedClass.year].data, ...newYear}};

        let newData = {};
        newData[loadedClass.year] = newYear;

        console.log(newYear, newData);

        return {...state, data: {...state.data, ...newData}}
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
