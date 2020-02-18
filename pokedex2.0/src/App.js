import React, { Component } from 'react';
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';
import Detail from './Details';
import Home from './Home';
import About from './About.js';
import ErrorMessage from './ErrorMessage'
import './App.css';

export default class App extends Component {
  render() {
      return (
        <Router>
          <div>
            <img alt='header' src='https://vignette.wikia.nocookie.net/logopedia/images/6/6f/Pok%C3%A9dex_3D_Pro.png/revision/latest?cb=20130910213833'>
            </img>
            <br>
            </br>
            <Link to="/">Home</Link>
            <Link to="/about-me/About">About</Link>
            <Switch>
              <Route exact path="/:name?" component={Home} />
              <Route exact path="/about-me/About" component={About} />
              <Route exact path="/characters/:charId" component={Detail} />
              <Route component={ErrorMessage}/>
            </Switch>
          </div>
        </Router>
      );
    }
}
