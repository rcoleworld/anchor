import { Link } from 'react-router-dom';
import '../stylesheets/navigationbar.css';
import { useState } from 'react'
import { v4 as uuid } from 'uuid';

const Navigation = () => {
  const [searchString, setSearchString] = useState('');

  const changeSearchString = (e) => {
    setSearchString(e.target.value);
  }
  
  return (
    <nav className="navbar">
      <a className="navbar-left" href="/">
        <img className="navbar-logo" src="../images/anchor-light.png" alt = ""></img>
      </a>
      <ul className="navbar-right">
        <li className="navbar-compare">
          <a href="/about" className="navbar-link" >About</a>
        </li>
        <li className="navbar-compare">
          <a href="/compare" className="navbar-link">Compare v</a>
              <div className="navbar-compare-dropdown">
                <a href="compare/sources" className="navbar-dropdown-item">Sources</a>
                <a href="compare/articles" className="navbar-dropdown-item">Articles</a>
            </div>
        </li>
        <li className="navbar-categories">
        <a href="/categories" className="navbar-link">Categories v</a>
          <div className="navbar-category-dropdown" >
              <Link className="navbar-dropdown-item" to = {{pathname: "/politics", state: {category: "politics"}}}>Politics</Link>
              <Link className="navbar-dropdown-item" to = {{pathname: "/world", state: {category: "world"}}}>World</Link>
              <Link className="navbar-dropdown-item" to = {{pathname: "/health", state: {category: "health"}}}>Health</Link>
              <Link className="navbar-dropdown-item" to = {{pathname: "/science", state: {category: "science"}}}>Science</Link>
            <div className="navbar-horizontal-line"></div>
          <a href="/categories" className="navbar-dropdown-item">View All</a>
        </div>
      </li>
        <input className = "navbar-search-bar" type="text" placeholder="Search" onChange={changeSearchString}/>
        {/* UUID is unique everytime so everytime this link is clicked the key changes. This is used later in SearchResults.jsx to handle the react lifecycle of when this component updates. */}
        <Link className="navbar-search-button" key={uuid()} to={{pathname: "/search", state: {search: searchString}}}><img className="navbar-search-icon" src="../images/search.png"></img></Link>
      </ul>
    </nav>
  )
}

export default Navigation;