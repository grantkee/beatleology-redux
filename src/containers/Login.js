import {connect} from 'react-redux';
import Login from '../components/Login';
import {login} from '../redux/actions';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  login: (data) => dispatch(login(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
