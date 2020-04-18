import {connetct, connect} from 'react-redux';
import Main from '../components/Main';
import {} from '../redux/actions';

const mapStateToProps = state => ({
  questions: state.questions,
  answerOptions: state.answerOptions
});

const mapDispatchToProps = state => ({
  getQuizQuestions: () => dispatch(getQuizQuestions()),
  getAnswerOptions: (id) => dispatchEvent(getAnswerOptions(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);