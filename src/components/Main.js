import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
//import quiz components
import Results from './Results';
import Quiz from './Quiz';

export default function Main(props) {
  const {
    user, getQuizQuestions, getAnswerOptions, questions, answerOptions, answers, answerSelected, getResults, resultsReady
  } = props;
  const [count, setCount] = useState(1);
  const [questionId, setQuestionId] = useState(0);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  //get questions
  useEffect(() => {
      getQuizQuestions();
  },[]);
  
  //once we have quiz questions, load the first question
  useEffect(()=>{
    if(questions.length !== 0){
      let q = questions[questionId];
      getAnswerOptions(q.id);
      setQuestion(q.question);
      setQuestionId(questionId + 1);
    }
  },[questions.length]);

  // useEffect(() => {
  //   // props.getAnswerOptions();
  //   if(answerOptions !== 0){
  //     let shuffledAnswerOptions = shuffleArray(answerOptions);
  //     setShuffledAnswers(shuffledAnswerOptions);
  //     console.log(answerOptions)
  //   }
  // },[answerOptions]);

  // useEffect(()=>{
  //   let shuffledAnswerOptions = shuffleArray(answerOptions);
  //   // setQuestion(props.questions[questionId].question);
  //   setShuffledAnswers(shuffledAnswerOptions);
  // },[question]);

  const handleAnswerSelection = (e) => {
    let selection = e.currentTarget.id;
    setAnswer(selection);
    if (questionId < questions.length){
      answerSelected(selection);
      // setTimeout(() => nextQuestion(), 333);
      nextQuestion();
    } else {
      getResults(questions.length);
      // setTimeout(()=>renderResults(), 333);
    }
  }

  const nextQuestion = () => {
    let q = questions[questionId];
    getAnswerOptions(q.id);
    setCount(count + 1);
    setQuestionId(questionId + 1);
    setQuestion(q.question);
    setAnswer('');
  };
  // const setResult = (result) =>{
  //   renderResults()
  // }

  const renderQuiz = () => (
    <Quiz
      answer={answer}
      answerOptions={answerOptions}
      questionId={questionId}
      question={question}
      questionTotal={questions.length === 0 ? 'Loading...' : questions.length}
      onAnswerSelected={handleAnswerSelection}
    />
  );

  const renderResults = () => (
    <Results results={answers} user={user.username} />
  );

  return (
    <div className="App">
      <Header />
      {resultsReady ? renderResults() : renderQuiz()}
    </div>
  );
};

Results.propTypes = {
  user: PropTypes.object.isRequired,
  getQuizQuestions: PropTypes.func.isRequired,
  getAnswerOptions: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
  answerOptions: PropTypes.array.isRequired,
  answers: PropTypes.object.isRequired,
  answerSelected: PropTypes.object.isRequired,
  getResults: PropTypes.func.isRequired,
  resultsReady: PropTypes.bool.isRequired
}