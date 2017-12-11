import { fromJS } from 'immutable';

import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  NO_CHANGE,
  CHECK_IS_AUTHENTICATED,
  AUTHENTICATED
} from './constants';
import history from 'browserHistory';


const initialState = fromJS({
  isChecking: false,
  isRequesting: false,
  isSuccess: false,
  isError: false,
  isAuthenticated: false
});

export default function loginReducer(state = initialState, action) {
  console.log({action}, 'login')
  switch (action.type) {

    case LOGIN_REQUEST:
      return state.set('isRequesting', true);

    case LOGIN_FAILURE:
      return state
        .set('isRequesting', false)
        .set('isError', true)

    case LOGIN_SUCCESS:
      return state
        .set('isRequesting', false)
        .set('isSuccess', true)

    case CHECK_IS_AUTHENTICATED:
      return state
        .set('isChecking', true)

    case AUTHENTICATED:
      return state
        .set('isChecking', false)

    case NO_CHANGE:
      return state
        .set('isChecking', false)

    default:
      return state;
  }
}
