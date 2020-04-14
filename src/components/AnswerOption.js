import React from 'react';
import PropTypes from 'prop-types';

export default function AnswerOption(props) {
  return (
    <li className="answerOption">
      <input
        type='radio'
        className='radioCustomButton'
        name='radioGroup'
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      {/* htmlFor */}
      <label className='radioCustomLabel' htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </li>
  );
}

AnswerOption.propTypes = {
  answer: PropTypes.string.isRequired,
  answerType: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
};