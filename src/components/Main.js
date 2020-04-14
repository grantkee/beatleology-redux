import React from 'react';
//import quiz components
import Question from './Question';

export default function Main() {
  return (
    <div className="App">
      <div>
        <h2 className="App-header">Beatleology Quiz</h2>
      </div>
      <Question content="What is your favorite food?" />
    </div>
  )
}