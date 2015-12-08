import thunk from 'redux-thunk';
import $ from 'jquery';
import server from './serverConfig';

/*
  action types
*/

export const RELOAD_SIDE_BAR = 'RELOAD_SIDE_BAR';
export const RELOAD_SIDE_BAR_CLASSES = 'RELOAD_SIDE_BAR_CLASSES';
export const RELOAD_SIDE_BAR_STUDENTS = 'RELOAD_SIDE_BAR_STUDENTS';


/*
  action creators
*/

const requestReload = () => {
  return {
    type: RELOAD_SIDE_BAR,
    start: true
  }
}

const finishReload = (status, data) => {
  return {
    type: RELOAD_SIDE_BAR,
    finish: true,
    success: status,
    data: data
  }
}

export const reload = () => dispatch => {
  dispatch(requestReload());
  $.ajax({
    method: 'GET',
    //url: 'https://api.myjson.com/bins/3mcwl'
    url: `${server.url}/side-bar`
  }).done(data => {
    dispatch(finishReload(true, data));
  }).fail(() => {
    dispatch(finishReload(false));
  });
}

const finishReloadClasses = (status, classes, year) => {
  console.log('finishReloadClasses');
  return {
    type: RELOAD_SIDE_BAR_CLASSES,
    finish: true,
    success: status,
    data: {
      year: year,
      classes: classes
    }
  }
}

export const reloadClasses = (year) => (dispatch, getState) => {
  $.ajax({
    method: 'GET',
    //url: 'https://api.myjson.com/bins/3v59h'
    url: `${server.url}/side-bar/${year}`
  }).done(data => {
    dispatch(finishReloadClasses(true, data, year));
  }).fail(() => {
    dispatch(finishReloadClasses(false));
  });
}

const finishReloadStudents = (status, students, year, class_) => {
  console.log('finishReloadStudents');
  return {
    type: RELOAD_SIDE_BAR_STUDENTS,
    finish: true,
    success: status,
    data: {
      year: year,
      class_: class_,
      students: students
    }
  }
}

export const reloadStudents = (year, class_) => (dispatch, getState) => {
  $.ajax({
    method: 'GET',
    //url: 'https://api.myjson.com/bins/3lb3h'
    url: `${server.url}/side-bar/${year}/${class_}`
  }).done(data => {
    dispatch(finishReloadStudents(true, data, year, class_));
  }).fail(() => {
    dispatch(finishReloadStudents(false));
  });
}
