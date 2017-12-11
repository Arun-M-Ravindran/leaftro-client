import { put, takeLatest, call } from 'redux-saga/effects';

import { LOGIN_REQUEST, CHECK_IS_AUTHENTICATED } from './constants';
import { loginError, noChange, authenticated, loginSuccess } from './actions';
import { loginApi, validateAuthTokenApi } from 'utils/apis';


function* loginFlow(action) {
  try {

    const response = yield loginApi.post(action.payload)
    console.log({response})

    window.localStorage.setItem('id_token', response.token);

    yield put(loginSuccess());

  } catch (error) {
    console.log({error})
    yield put(loginError())
  }
}

function* checkAuthFlow(action) {
  try {

    let TOKEN = window.localStorage.getItem('id_token');

    if (!TOKEN) throw new Error('No Token!');
    const response = yield validateAuthTokenApi.post({ token: TOKEN })

    yield put(authenticated())

  } catch(error) {
    console.log({error})
    yield put(noChange())
  }
}


export default function* loginWatcher() {
  yield takeLatest(CHECK_IS_AUTHENTICATED, checkAuthFlow),
  yield takeLatest(LOGIN_REQUEST, loginFlow)
}
