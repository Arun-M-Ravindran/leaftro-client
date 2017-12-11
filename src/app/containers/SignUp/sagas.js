/*****************************
 * Author : fazilbinzaid
 * Created on : 11-12-2017
 *****************************/

import { put, call, takeLatest } from 'redux-saga/effects';

import { SIGN_UP_REQUEST } from './constants';


function* signUpFlow (action) {
  try {

  } catch(error) {

  }
}


export default function* signUpWatcher() {
  yield takeLatest(SIGN_UP_REQUEST, signUpFlow)
}
