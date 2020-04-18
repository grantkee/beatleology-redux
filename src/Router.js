import React from 'react';
import {Switch, Route} from 'react-router';
import Main from './containers/Main';

export default function Router() {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
    </Switch>
  )
}