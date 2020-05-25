import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import Copyright from './Copyright';
import Button from '@material-ui/core/Button';

const Header = React.memo(() => (
    <div>
      <img src={logo} className="App-logo" alt="logo"/>
      <h2 className="App-header">Beatleology Quiz</h2>
      <div>
        <Link to='/login'><Button>LOGIN</Button></Link>
        <Link to='/signup'><Button>SIGN UP</Button></Link>
      </div>
      <Copyright />
  </div>
  )
);

export default Header;
