import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import Copyright from './Copyright';
import Button from '@material-ui/core/Button';

const Header = React.memo((props) => {
  const {user, logout, resultsReady} = props;

  // when using guest route, only show login/signup - after quiz, guest can revisit their results until page is refreshed
  return (
    <div className="app">
      <img src={logo} className="app-logo" alt="logo"/>
      <Link to='/' style={{textDecoration: 'none'}}><h2 className="app-header">Inner-Beatle Quiz</h2></Link>
      <div>
        {user.isOn ? (
          <Link to='/'><Button onClick={() => logout()}>Logout</Button></Link>
        ) : (
          <>
            <Link to='/login'><Button>LOGIN</Button></Link>
            <Link to='/signup'><Button>SIGN UP</Button></Link>
            { !window.location.href.includes('/guest') &&
              ( resultsReady ?
                <Link to='/guest'><Button>View Results</Button></Link>
                :
                <Link to='/guest'><Button onClick={() => localStorage.setItem('token', 'guest')}>Continue as Guest</Button></Link>
              )
            }
            </>
        )}
      </div>
      <Copyright />
    </div>
    );
  }
);

export default Header;
