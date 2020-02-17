import React, { Component } from 'react';
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';
import Detail from './Detail';
import Home from './Home';
import About from './About.js';
import './App.css';

export default class App extends Component {
  render() {
      return (
        <Router>
          <div>
            <h2>Pokemon search</h2>
            <Link to="/">Home</Link>
            <Link to="/about-me/some-other-param">About the Developer</Link>
            <Switch>
              <Route exact path="?:name?" component={Home} />
              <Route exact path="/about-me/:other/:thing/:here" component={About} />
              <Route exact path="/characters/:charId" component={Detail} />
            </Switch>
          </div>
        </Router>
      );
    }
}
