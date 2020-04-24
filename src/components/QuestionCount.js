import React from 'react';
import PropTypes from 'prop-types';

export default function QuestionCount(props) {
  return (
    <div className="question-count">
      Question <span>{props.count}</span> of <span>{props.total}</span>
    </div>
  );
}

QuestionCount.propTypes = {
  count: PropTypes.number.isRequired,
  total: PropTypes.oneOfType([ PropTypes.string.isRequired, PropTypes.number.isRequired]),
};
