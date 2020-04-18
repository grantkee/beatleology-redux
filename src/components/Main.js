import React, { useState, useEffect } from 'react';
//import quiz components
import Question from './Question';

export default function Main() {
  const [counter, setCounter] = useState(0);
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [answerOptions, setAnswerOptions] = useState([]);
  let answersCount = {};
  let result = '';

  const useEffect = () => {
    let shuffledAnswerOptions = quizQuestions.map(questions => shuffleArray(question.answers));

    setQuestion(quizQuestions[0].question);
    //call get from server to fill answer options array, setAnswerOption?
    setAnswerOptions(shuffledAnswerOptions[0]);
  }
  
  return (
    <div className="App">
      <div>
        <h2 className="App-header">Beatleology Quiz</h2>
      </div>
      <Question content="What is your favorite food?" />
    </div>
  )
}
