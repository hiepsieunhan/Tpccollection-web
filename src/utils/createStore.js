import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import { createHistory } from 'history';
import rootReducer from '../reducers';
import { devTools, persistState } from 'redux-devtools';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
);

export default (initialState) => {
  return compose(
    createStoreWithMiddleware,
    reduxReactRouter({ createHistory }),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore)(rootReducer);
};
