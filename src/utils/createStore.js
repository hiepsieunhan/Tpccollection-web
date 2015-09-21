import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import rootReducer from '../reducers';
import { Playback } from '../constants/ActionTypes';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware,
  loggerMiddleware
)(createStore);

export default (initialState) => {
  return createStoreWithMiddleware(rootReducer, initialState);
};
