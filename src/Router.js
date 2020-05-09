import React from 'react';
import {Switch, Route} from 'react-router';
import Main from './containers/Main';
import Signup from './components/Signup';
import Login from './components/Login';

export default function Router() {
  return (
    <Switch>
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
      <Route exact path='/' component={Main} />
    </Switch>
  )
}