/*****************************
 * Author : fazilbinzaid
 * Created on : 11-12-2017
 *****************************/

import { createSelector } from 'reselect';


const selectSignUp = state => state.get('signUp');

export {
  selectSignUp
}
