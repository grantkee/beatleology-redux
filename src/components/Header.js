import React from 'react';
import logo from '../logo.svg';
import Copyright from './Copyright';
import {Link} from 'react-router-dom';

const Header = React.memo(() => (
    <div>
      <Link to='/login'><img src={logo} className="App-logo" alt="logo"/></Link>
      <h2 className="App-header">Beatleology Quiz</h2>
      <Copyright />
  </div>
  )
);

export default Header;
