import {combineReducers} from 'redux';
import initialState from './state';

const user = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN':
      debugger;
      return {username: action.username, isOn: action.value}
    case 'LOGOUT':
      return action.value;
    default:
      return state;
  }
}

const questions = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_QUESTIONS':
      return action.value;
    default:
      return state;
  }
}

const questionCount = (state = initialState, action) => {
  switch(action.type) {
    case 'NEXT_QUESTION':
      return action.value + 1;
    default:
      return state;
  }
}

const answerOptions = (state = initialState, action) => {
  switch(action.type){
    case 'SHUFFLE_ANSWERS':
      //Fisher-Yates shuffle algorithm
      let arr = action.value;
      let currentIndex = arr.length;
      let tempValue;
      let randomIndex;
      while (currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        tempValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = tempValue;
      }
      return arr;
    default:
      return state;
  }
}

const answers = (state = initialState, action) => {
  switch(action.type){
    case 'ANSWER_SELECTED':
      return {...state, [action.value]: (state[action.value] || 0) + 1};
    case 'GET_RESULTS':
      let answers = {...state}
      for (let i in answers){
          answers[i] = (answers[i] / action.total * 100).toFixed(2) + '%';
        }
      return answers;
    default:
      return state;
  }
}

const resultsReady = (state = initialState, action) => {
  switch(action.type){
    case 'GET_RESULTS':
      return action.value;
    default:
      return state;
  }
}

// const results = (state = initialState, action) => {
//   switch(action.type){
//     case 'GET_RESULTS':
//       console.log('answer', action.answer)
//       console.log('answer', action.answers)
//       console.log('state.answers', answers)
//       // const answersCount = this.state.answersCount;
//       // const answersCountKeys = Object.keys(answersCount);
//       // const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
//       // const maxAnswerCount = Math.max.apply(null, answersCountValues);
    
//       // return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
//     debugger;
//       return [];
//     default:
//       return state;
//   }
// }

export default combineReducers({user, questions, questionCount, answerOptions, answers, resultsReady});
