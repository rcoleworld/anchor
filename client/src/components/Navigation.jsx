import React, { button } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/navigationbar.css';

const showSearchBar = () => {
  var searchBar = document.getElementById("search-bar");
  // searchBar.style.visibility == "visible";
}

const Navigation = () => {
  return (
    <div className = "navbar">
      <a href="/"><img className="navbar-logo" src="../images/anchor-light.png" alt = ""></img></a>
      <ul>
        <li><a href="/about" style={{ textDecoration: 'none' }}>About</a></li>
        <li><a href="/categories" style={{ textDecoration: 'none' }}>Categories</a></li>
        <li><a href="/compare" style={{ textDecoration: 'none' }}>Compare</a></li>
        <li><button className="search-button"><img className="search-icon" src="../images/search.png" onClick={showSearchBar}></img></button></li>
        <li><input className="search-bar" type="text" placeholder="search" /></li>
      </ul>
    </div>
      );
    }
export default Navigation;