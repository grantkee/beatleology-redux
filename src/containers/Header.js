import {connect} from 'react-redux';
import Header from '../components/Header';
import {logout} from '../redux/actions';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
