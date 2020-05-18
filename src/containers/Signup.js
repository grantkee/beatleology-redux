import {connect} from 'react-redux';
import Signup from '../components/Signup';
import {signup} from '../redux/actions';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  signup: (data) => dispatch(signup(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
