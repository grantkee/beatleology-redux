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
