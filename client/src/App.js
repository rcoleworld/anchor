import logo from './logo.svg';

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
      <header>
      <Router>
        <nav>
              <NavLink exact to ="/" activeClassName="selected"> Home </NavLink> | 
              <NavLink to="/about" activeClassName="selected"> About </NavLink> |
              <NavLink to="/categories" activeClassName="selected"> Categories </NavLink> | 
              <NavLink to="/compare" activeClassName="selected"> Compare </NavLink>
  
        </nav>

        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/categories"><Categories /></Route>
          <Route path="/compare"><Compare /></Route>
          <Route path="/"><Home /></Route> // Beverly's note: MUST BE AT BOTTOM, DO NOT MOVE
        </Switch>
      </Router>
      </header>

    </div>
  );
}

export default App;
