import {connect} from 'react-redux';
import Main from '../components/Main';
import {getQuizQuestions, getAnswerOptions, answerSelected, getResults} from '../redux/actions';

const mapStateToProps = state => ({
  questions: state.questions,
  answerOptions: state.answerOptions,
  answers: state.answers,
  results: state.results
});

const mapDispatchToProps = dispatch => ({
  getQuizQuestions: () => dispatch(getQuizQuestions()),
  getAnswerOptions: id => dispatch(getAnswerOptions(id)),
  answerSelected: answer => dispatch(answerSelected(answer)),
  getResults: (answer, answers) => dispatch(getResults(answer, answers))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
