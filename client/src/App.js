import React from 'react';
import{ useState } from "react";
import Navigation from './components/Navigation'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/About'
import Categories from './components/Categories'
import Category from './components/Category'
import Compare from './components/Compare'
import Article from './components/Article'
import SearchResults from './components/SearchResults'
import CompareSources from './components/CompareSources'
import CompareArticles from './components/CompareArticles'
import Source from './components/Source'
import Home from './Home'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [theme, setTheme] = useState('blue-theme');
  const handleCallback = (newTheme) =>{
    setTheme(newTheme);
  }
  return (
    <div className={theme}>
      <Router>
      <Navigation parentCallback = {handleCallback}/>
      <Switch>
          <Route exact path="/about"><About/></Route>
          <Route path="/source/:publisher"><Source/></Route>
          <Route path="/categories"><Categories /></Route>
          <Route path="/compare/sources"><CompareSources/></Route>
          <Route path="/compare/articles"><CompareArticles/></Route>
          <Route path="/compare"><Compare /></Route>
          <Route path="/search"><SearchResults/></Route>
          <Route path="/:category/:id"><Article/></Route>
          
          <Route path="/:category"><Category/></Route>
          
          <Route path="/"><Home/></Route>
      </Switch>
      </Router>
    </div>
  );
}
export default App;