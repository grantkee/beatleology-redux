export const getQuizQuestions = () => (
  dispatch => {
    fetch('/quiz')
      .then(res => res.json())
      .then(response => {
        const action = {
          type: 'FETCH_QUESTIONS',
          value: response
        }
        dispatch(action)
      })
    .catch(error => console.log(error));
  }
);

export const getAnswerOptions = id => (
  dispatch => {
    fetch(`/quiz/${id}`)
      .then(res => res.json())
      .then(response => {
        const action = {
          type: 'SHUFFLE_ANSWERS',
          value: response
        }
        dispatch(action)
      })
    .catch(error => console.log(error));
  }
);

export const nextQuestion = () => ({
  type: 'NEXT_QUESTION'
})

export const answerSelected = answer => ({
  type: 'ANSWER_SELECTED',
  value: answer
});

export const getResults = (answer, answers) => ({
  type: 'GET_RESULTS',
  value: answer,
  answers: answers
});
