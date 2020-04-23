import React, { useState, useEffect } from 'react';
//import quiz components
import Question from './Question';
import Quiz from './Quiz';

export default function Main(props) {
  const [counter, setCounter] = useState(0);
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [answerOptions, setAnswerOptions] = useState([]);
  let answersCount = {};
  let result = '';

  const shuffleArray = arr => {
    let currentIndex = arr.length, tempValue, randomIndex;

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
  }

  const useEffect = (() => {
    props.getAnswerOptions(questionId);
    let shuffledAnswerOptions = shuffleArray(props.answerOptions);

    setQuestion(props.quizQuestion[counter - 1]);
    //call get from server to fill answer options array, setAnswerOption?
    setAnswerOptions(shuffledAnswerOptions);
  }, [questionId]);
  
  return (
    <div className="App">
      <div>
        <h2 className="App-header">Beatleology Quiz</h2>
      </div>
      <Quiz
        answer={answer}
        answerOptions={answerOptions}
        questionId={questionId}
        question={question}
        questionTotal={props.questions.length}
        onAnswerSelected={() => props.answerSelected}
      />
    </div>
  )
}
