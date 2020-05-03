import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';

export default function Quiz(props) {
  const {answer, questionId, onAnswerSelected, questionTotal, question, answerOptions} = props;

  const renderAnswerOptions = (key) => (
      <AnswerOption
        key={key.answer_type}
        answerContent={key.content}
        answerType={key.answer_type}
        answer={answer}
        value={key.answer_type}
        onAnswerSelected={onAnswerSelected}
        />
    );

  return(
    <Container maxWidth='sm'>
      <QuestionCount
        count={questionId}
        total={questionTotal}
      />
      <Question content={question} />
      <List>{answerOptions.map(renderAnswerOptions)}</List>
      {/* <ul className='answerOptions'>
      </ul> */}
    </Container>
  );
}

Quiz.propTypes = {
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.oneOfType([ PropTypes.string.isRequired, PropTypes.number.isRequired]),
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};
