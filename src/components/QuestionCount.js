import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function QuestionCount(props) {
  const {count, total} = props;
  return (
      <Typography align='center' display='block' variant='subtitle2'>
        {`Question ${count} of ${total}`}
      </Typography>
  );
};

QuestionCount.propTypes = {
  count: PropTypes.number.isRequired,
  total: PropTypes.oneOfType([ PropTypes.string.isRequired, PropTypes.number.isRequired]),
};
