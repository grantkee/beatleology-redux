import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import Copyright from './Copyright';
import Button from '@material-ui/core/Button';

const Header = React.memo((props) => {
  const {user, logout} = props;

  return (
    <div className="app">
      <img src={logo} className="app-logo" alt="logo"/>
      <h2 className="app-header">Beatleology Quiz</h2>
      <div>
        {user.isOn ? (
          <Link to='/'><Button onClick={() => logout()}>Logout</Button></Link>
        ) : (
          <>
            <Link to='/login'><Button>LOGIN</Button></Link>
            <Link to='/signup'><Button>SIGN UP</Button></Link>
          </>
        )}
      </div>
      <Copyright />
    </div>
    );
  }
);

export default Header;
