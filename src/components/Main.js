import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
//import quiz components
import Question from './Question';
import Quiz from './Quiz';

export default function Main(props) {
  const [count, setCount] = useState(1);
  const [questionId, setQuestionId] = useState(0);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [answerOptions, setAnswerOptions] = useState([]);
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
  },[]);
  
  //once we have quiz questions, load the first question
  useEffect(()=>{
    if(props.questions.length !== 0){
      let q = props.questions[questionId];
      props.getAnswerOptions(q.id);
      setQuestion(q.question);
      setQuestionId(questionId + 1);
    }
  },[props.questions.length]);

  useEffect(()=>{
    // props.getAnswerOptions();
    if(props.answerOptions !==0){
      let shuffledAnswerOptions = shuffleArray(props.answerOptions);
      setAnswerOptions(shuffledAnswerOptions);
      console.log(answerOptions)
    }
  },[props.answerOptions]);

  useEffect(()=>{
    let shuffledAnswerOptions = shuffleArray(props.answerOptions);
    // setQuestion(props.questions[questionId].question);
    setAnswerOptions(shuffledAnswerOptions);
  },[question])

  const handleAnswerSelection = (e) => {
    setAnswer(e.currentTarget.value);
    props.answerSelected(answer);
    if (questionId < props.questions.length){
      setTimeout(() => nextQuestion(), 333)
    } else {
      setTimeout(()=> props.setResult())
    }
  }

  const nextQuestion = () => {
    let q = props.questions[questionId]
    props.getAnswerOptions(q.id);
    setCount(count + 1);
    setQuestionId(questionId + 1);
    setQuestion(q.question);
    setAnswer('');
  }
  
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
        onAnswerSelected={handleAnswerSelection}
      />
    </div>
  )
}
