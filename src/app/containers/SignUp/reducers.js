/*****************************
 * Author : fazilbinzaid
 * Created on : 11-12-2017
 *****************************/

import { fromJS } from 'immutable';


const initialState = fromJS({

});

export default function signUpReducer(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}
