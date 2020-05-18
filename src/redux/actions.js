export const signup = (data) => (
  dispatch => {
    fetch('/auth/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => {
      const action = {
        type: 'SIGNUP',
        value: response
      }
      dispatch(action)
    })
    .catch(error => console.log('SIGNUP ERROR:', error))
  }
)

export const login = (data) => (
  dispatch => {
    fetch('/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    // .then(res => res.json())
    .then(res => res.text())
    .then(response => {
      const action = {
        type: 'LOGIN',
        username: data.username,
        value: true,
        token: response
      }
      console.log(response);
      dispatch(action);
    })
    .catch(error => console.log('LOGIN ERROR:', error));
  }
);

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
    .catch(error => console.log('q', error));
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
    .catch(error => console.log('a', error));
  }
);

export const nextQuestion = () => ({
  type: 'NEXT_QUESTION'
})

export const answerSelected = answer => ({
  type: 'ANSWER_SELECTED',
  value: answer
});

export const getResults = (total) => ({
  type: 'GET_RESULTS',
  value: true,
  total: total
});
