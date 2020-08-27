import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './vista/Home'
import Anime from './vista/Anime'
import Manga from './vista/Manga'

import "bootstrap/dist/css/bootstrap.css";
import "jquery";
import "popper.js";
import "bootstrap";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/Manga' component={Manga} exact />
          <Route path='/Anime/:id' component={Anime} exact />
          <Route render={() => <h1>Not found!</h1>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
