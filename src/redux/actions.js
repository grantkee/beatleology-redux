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
);

export const login = (data) => (
  dispatch => {
    fetch('/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => {
      const action = {
        type: 'LOGIN',
        username: response.data.username,
        value: true,
      }
      console.log(response);
      dispatch(action);
      localStorage.setItem('token', response.accessToken);
      // document.cookie = `token=${response.accessToken};`;
    })
    .catch(error => console.log('LOGIN ERROR:', error));
  }
);

export const getQuizQuestions = () => {
  let token = localStorage.getItem('token');
  return (
    dispatch => {
      fetch('/quiz', {
        headers: {
          'Authorization': 'BEARER ' + token
        }
      })
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
  )
};

export const getAnswerOptions = id => {
  let token = localStorage.getItem('token');
  return (
    dispatch => {
      fetch(`/quiz/${id}`,{
        headers: {
          'Authorization': 'BEARER ' + token
        }
      })
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
  )
};

export const nextQuestion = () => ({
  type: 'NEXT_QUESTION'
});

export const answerSelected = answer => ({
  type: 'ANSWER_SELECTED',
  value: answer
});

export const getResults = (total) => ({
  type: 'GET_RESULTS',
  value: true,
  total: total
});
