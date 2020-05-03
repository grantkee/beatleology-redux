import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Question(props) {
  return (
    <Typography className="question">{props.content}</Typography>
  );
}

Question.propTypes={
  content: PropTypes.string.isRequired
};
