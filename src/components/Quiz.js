import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';

export default function Quiz(props) {
  function renderAnswerOptions(key){
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelect={props.onAnswerSelected}
        />
    )
  }
  return(
    <div className='quiz'>
      <QuestionCount
        counter={props.questionId}
        total={props.questionTotal}
      />
      <Question content={props.question} />
      <ul className='answerOptions'>
        {/* props.renderAnswerOptions created with redux */}
        {props.answerOptions.map(renderAnswerOptions)}
      </ul>
    </div>
  );
}

Quiz.propTypes = {
  counter: PropTypes.number.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};