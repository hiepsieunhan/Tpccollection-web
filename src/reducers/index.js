import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import sideBarReducer from './sideBarReducer';
import formReducer from './formReducer';

const reducer = combineReducers({
  router: routerStateReducer,
  sideBar: sideBarReducer,
  form: formReducer
});


export default reducer;
