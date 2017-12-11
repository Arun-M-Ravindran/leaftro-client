import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  NO_CHANGE,
  CHECK_IS_AUTHENTICATED,
  AUTHENTICATED
} from './constants';
import browserHistory from 'browserHistory';


export function requestLogin(payload) {
  return {
    type: LOGIN_REQUEST,
    payload
  };
}

export function loginError(payload) {
  return {
    type: LOGIN_FAILURE,
    payload
  };
}

export function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload
  }
}

export function noChange() {
  return {
    type: NO_CHANGE
  }
}

export function authenticated() {
  browserHistory.push('/dashboard');
  return {
    type: AUTHENTICATED
  }
}

export function checkIsAuthenticated() {
  return {
    type: CHECK_IS_AUTHENTICATED
  }
}
