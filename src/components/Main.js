import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import Header from '../containers/Header';
//import quiz components
import Results from './Results';
import Quiz from './Quiz';

export default function Main(props) {
  const {
    user, getQuizQuestions, getAnswerOptions, questions, answerOptions, answers, answerSelected, getResults, resultsReady, logout
  } = props;
  const [count, setCount] = useState(1);
  const [questionId, setQuestionId] = useState(0);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const {username} = user;

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


  const handleAnswerSelection = (e) => {
    let selection = e.currentTarget.id;
    setAnswer(selection);

    if (questionId < questions.length){
      answerSelected(selection);
      nextQuestion();
    } else {
      getResults(questions.length);
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

  const renderQuiz = () => {
    if(!localStorage.getItem('token')){
      logout();
    }
    return (
      localStorage.getItem('token') ? (
        <Quiz
          answer={answer}
          answerOptions={answerOptions}
          questionId={questionId}
          question={question}
          questionTotal={questions.length === 0 ? 'Loading...' : questions.length}
          onAnswerSelected={handleAnswerSelection}
        />
      ) : (
        <Redirect to='/' />
      )
  )};

  const renderResults = () => (
    <Results results={answers} user={username} />
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
};