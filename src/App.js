import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import New from './views/New';
import Edit from './views/Edit';
import Home from './views/Home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sessions/new">
          <New />
        </Route>
        <Route path="/sessions/:id/edit">
          <Edit />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

