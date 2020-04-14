import {combineReducers} from 'redux';
import initialState from './state';

const user = (state=initialState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return action.value
    case 'LOGOUT':
      return action.value
    default:
      return state
  }
}

export default combineReducers({user});