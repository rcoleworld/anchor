import React from 'react';
import Navigation from './components/Navigation'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/About'
import Categories from './components/Categories'
import Category from './components/Category'
import Compare from './components/Compare'
import Article from './components/Article'
import Home from './Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
      <Switch>
          <Route exact path="/about"><About/></Route>
          <Route path="/categories"><Categories /></Route>
          <Route path="/compare"><Compare /></Route>
          <Route path="/:category/:id"><Article/></Route>
          <Route path="/:category"><Category/></Route>
          <Route path="/"><Home/></Route>
      </Switch>
      </Router>
    </div>
  );
}
export default App;