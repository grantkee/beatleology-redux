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

const questions = (state=initialState, action) => {
  switch(action.type) {
    case 'QUIZ_QUESTIONS':
      return action.value;
    default:
      return state;
  }
}

const answers = (state=initialState, action) => {
  switch(action.type){
    case 'ANSWER_OPTIONS':
      return action.value;
    default:
      return state;
  }
}

export default combineReducers({user, questions, answers});