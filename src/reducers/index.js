import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import sideBarReducer from './sideBarReducer';
import formReducer from './formReducer';
import getInfoReducer from './getInfoReducer';

const reducer = combineReducers({
  router: routerStateReducer,
  sideBar: sideBarReducer,
  form: formReducer,
  getInfo: getInfoReducer
});


export default reducer;
