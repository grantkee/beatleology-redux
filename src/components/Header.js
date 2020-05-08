import React from 'react';
import logo from '../logo.svg';
import Copyright from './Copyright';

const Header = React.memo(() => (
    <div>
      <img src={logo} className="App-logo" alt="logo"/>
      <h2 className="App-header">Beatleology Quiz</h2>
      <Copyright />
  </div>
  )
);

export default Header;
