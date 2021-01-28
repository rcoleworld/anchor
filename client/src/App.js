import Navigation from './components/Navigation'
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import About from './components/About'
import Categories from './components/Categories'
import Compare from './components/Compare'
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation>
      </Navigation>
      <Router>
      <Switch>
          <Route path="/about"><About/></Route>
          <Route path="/categories"><Categories /></Route>
          <Route path="/compare"><Compare /></Route>
          <Route path="/"><Home/></Route> // Beverly's note: MUST BE AT BOTTOM, DO NOT MOVE
      </Switch>
      </Router>
    </div>
  );
}

export default App;
