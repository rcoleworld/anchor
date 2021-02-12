import React, { useState } from 'react';
import '../stylesheets/navigationbar.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <a className="navbar-left" href="/">
        <img className="navbar-logo" src="../images/anchor-light.png" alt = ""></img>
      </a>
      <ul className="navbar-right">
        <NavItem text = "About" link = "/about"/>
        <NavItem text = "Compare▾">
          <div className="navbar-dropdown">
            <a href="compare/sources" className="navbar-dropdown-item">Sources</a>
            <a href="compare/articles" className="navbar-dropdown-item">Articles</a>
          </div>
        </NavItem>
        <NavItem text = "Categories▾">
          <div className="navbar-dropdown">
            <a href="/category/politics" className="navbar-dropdown-item">Politics</a>
            <a href="/category/world" className="navbar-dropdown-item">World</a>
            <a href="/category/health" className="navbar-dropdown-item">Health</a>
            <a href="/category/science" className="navbar-dropdown-item">Science</a>
            <div className="navbar-horizontal-line"></div>
            <a href="/categories" className="navbar-dropdown-item">View All</a>
          </div>
        </NavItem>
        <input className = "navbar-search-bar" type="text" placeholder="Search"/>
        <button className="navbar-search-button"><img className="navbar-search-icon" src="../images/search.png"></img></button>
      </ul>
    </nav>
  )
}

const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="navbar-item">
      <a href={props.link} className="navbar-link" onClick={() => setOpen(!open)}>{props.text}</a>
      {open && props.children}
    </li>
  );
}

export default Navigation;