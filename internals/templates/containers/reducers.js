/*****************************
 * Author : <%= username %>
 * Created on : <%= date %>
 *****************************/

import { fromJS } from 'immutable';


const initialState = fromJS({

});

export default function <%= camelCaseName %>Reducer(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}
