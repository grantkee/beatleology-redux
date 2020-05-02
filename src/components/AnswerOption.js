import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

export default function AnswerOption(props) {
  const {answerContent, answerType, answer, onAnswerSelected} = props;
  const [checked, setChecked] = useState([0]);

  const handleSelection = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  // console.log('answer value', props.value)

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
  // return (
  //   <li className="answerOption">
  //     <input
  //       type='radio'
  //       className='radioCustomButton'
  //       name='radioGroup'
  //       checked={props.answerType === props.answer}
  //       id={props.answerType}
  //       value={props.answerType}
  //       disabled={props.answer}
  //       onChange={props.onAnswerSelected}
  //     />
  //     {/* htmlFor */}
  //     <label className='radioCustomLabel' htmlFor={props.answerType}>
  //       {props.answerContent}
  //     </label>
  //   </li>
  // );
};

AnswerOption.propTypes = {
  answer: PropTypes.string.isRequired,
  answerType: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  answerContent: PropTypes.string.isRequired,
};
