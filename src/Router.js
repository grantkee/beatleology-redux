import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router';
import cookie from 'cookie';
import Main from './containers/Main';
import Signup from './containers/Signup'; 
import Login from './containers/Login';

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies['token'] ? true : false;
}

const ProtectedRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props => 
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect 
          to={{
            pathname: '/login',
            state: {from: props.location}
          }}
        />
      )}
    />
);

export default function Router() {
  return (
    <Switch>
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
      <Route exact path='/' component={Main} />
    </Switch>
  )
}
