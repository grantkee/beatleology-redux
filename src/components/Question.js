import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Question(props) {
  const {content} = props;
  return (
    <Typography variant='h6'>{content}</Typography>
  );
}

Question.propTypes={
  content: PropTypes.string.isRequired
};
