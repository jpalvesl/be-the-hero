import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={() => (<h1>Hello World</h1>)} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes