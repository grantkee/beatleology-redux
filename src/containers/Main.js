import {connect} from 'react-redux';
import Main from '../components/Main';
import {getQuizQuestions, getAnswerOptions, answerSelected, getResults, logout} from '../redux/actions';

const mapStateToProps = state => ({
  user: state.user,
  questions: state.questions,
  answerOptions: state.answerOptions,
  answers: state.answers,
  resultsReady: state.resultsReady
});

const mapDispatchToProps = dispatch => ({
  getQuizQuestions: () => dispatch(getQuizQuestions()),
  getAnswerOptions: id => dispatch(getAnswerOptions(id)),
  answerSelected: answer => dispatch(answerSelected(answer)),
  getResults: (total) => dispatch(getResults(total)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
