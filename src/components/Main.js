import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
//import quiz components
import Results from './Results';
import Quiz from './Quiz';

export default function Main(props) {
  const {getQuizQuestions, getAnswerOptions, questions, answerOptions, answers, answerSelected, getResults, results} = props;
  const [count, setCount] = useState(1);
  const [questionId, setQuestionId] = useState(0);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  const shuffleArray = arr => {
    let currentIndex = arr.length;
    let tempValue;
    let randomIndex;

    //while there are unshuffled elements
    while (0 !== currentIndex){
      //pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      //swap with current element
      tempValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = tempValue;
    }
    return arr;
  };

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

  useEffect(() => {
    // props.getAnswerOptions();
    if(answerOptions !== 0){
      let shuffledAnswerOptions = shuffleArray(answerOptions);
      setShuffledAnswers(shuffledAnswerOptions);
      console.log(answerOptions)
    }
  },[answerOptions]);

  useEffect(()=>{
    let shuffledAnswerOptions = shuffleArray(answerOptions);
    // setQuestion(props.questions[questionId].question);
    setShuffledAnswers(shuffledAnswerOptions);
  },[question])

  const handleAnswerSelection = (e) => {
    setAnswer(e.currentTarget.value);
    console.log('answer', e.currentTarget.value);
    answerSelected(e.currentTarget.value);
    if (questionId < questions.length){
      setTimeout(() => nextQuestion(), 333);
    } else {
      console.log('answerOptions', answerOptions)
      setTimeout(() => setResult(getResults()), 333);
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

  const setResult = (result) =>{
    result ? console.log(answers) : console.log('uhhhhhhhhhhhhhhhh')
  }
  
  return (
    <div className="App">
      <div>
        <img src={logo} className="App-logo" alt="logo"/>
        <h2 className="App-header">Beatleology Quiz</h2>
      </div>
      { results ?       
        <Quiz
          answer={answer}
          answerOptions={shuffledAnswers}
          questionId={questionId}
          question={question}
          questionTotal={questions.length === 0 ? 'Loading...' : questions.length}
          onAnswerSelected={handleAnswerSelection}
        />
        :
        <Results results={results} />
      }
    </div>
  );
};
