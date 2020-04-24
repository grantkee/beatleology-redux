import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
//import quiz components
import Question from './Question';
import Quiz from './Quiz';

export default function Main(props) {
  // const [counter, setCounter] = useState(1);
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [answerOptions, setAnswerOptions] = useState([]);
  let answersCount = {};
  let result = '';

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
      props.getQuizQuestions();
      // await setQuestion(props.questions[counter].question);
    // setQuestion(props.questions[counter])
    // props.getAnswerOptions(questionId);
    // let newId = questionId +1;
    // setQuestionId(newId);
    // setQuestion(props.quizQuestion[counter - 1]);
    //call get from server to fill answer options array, setAnswerOption?
  },[]);
  
  //once we have quiz questions, load the first question
  useEffect(()=>{
    if(props.questions.length !== 0){
      setQuestion(props.questions[questionId - 1].question);
    }
  },[props.questions.length]);

  useEffect(()=>{
    let shuffledAnswerOptions = shuffleArray(props.answerOptions);
    setAnswerOptions(shuffledAnswerOptions);

  },[questionId])
  
  return (
    <div className="App">
      <div>
        <img src={logo} className="App-logo" alt="logo"/>
        <h2 className="App-header">Beatleology Quiz</h2>
      </div>
      <Quiz
        answer={answer}
        answerOptions={answerOptions}
        questionId={questionId}
        question={question}
        questionTotal={props.questions.length === 0 ? 'Loading...' : props.questions.length}
        onAnswerSelected={() => props.answerSelected}
      />
    </div>
  )
}
