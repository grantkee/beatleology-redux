import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

export default function AnswerOption(props) {
  const {answerContent, answerType, answer, onAnswerSelected} = props;
  
  return (
    <ListItem dense button onClick={onAnswerSelected} id={answerType} >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={answerType === answer}
          value={answerType}
          disabled={answer !== ''}
        />
      </ListItemIcon>
      <ListItemText primary={answerContent} />
    </ListItem>
  )
};

AnswerOption.propTypes = {
  answer: PropTypes.string.isRequired,
  answerType: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  answerContent: PropTypes.string.isRequired,
};
