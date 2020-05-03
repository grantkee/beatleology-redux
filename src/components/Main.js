import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
//import quiz components
import Results from './Results';
import Quiz from './Quiz';

export default function Main(props) {
  const {getQuizQuestions, getAnswerOptions, questions, answerOptions, answers, answerSelected, getResults} = props;
  const [count, setCount] = useState(1);
  const [questionId, setQuestionId] = useState(0);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  // const shuffleArray = arr => {
  //   let currentIndex = arr.length;
  //   let tempValue;
  //   let randomIndex;

  //   //while there are unshuffled elements
  //   while (0 !== currentIndex){
  //     //pick a remaining element
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;

  //     //swap with current element
  //     tempValue = arr[currentIndex];
  //     arr[currentIndex] = arr[randomIndex];
  //     arr[randomIndex] = tempValue;
  //   }
  //   return arr;
  // };

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
    console.log('answer before set:', answer)
    setAnswer(selection);
    answerSelected(selection);
    if (questionId < questions.length){
      setTimeout(() => nextQuestion(), 333);
    } else {
      getResults(selection, answers);
      setTimeout(()=>renderResults(), 334);
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
    <Results results={answers} />
  );

  return (
    <div className="App">
      <div>
        <img src={logo} className="App-logo" alt="logo"/>
        <h2 className="App-header">Beatleology Quiz</h2>
      </div>
      {answers.length === 5 ? renderResults() : renderQuiz()}
    </div>
  );
};
