import { Link } from 'react-router-dom';
import '../stylesheets/navigationbar.css';

const Navigation = () => {
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
          <a href="/compare" className="navbar-link">Compare
            <img className="navbar-dropdown-arrow" src="../images/dropdown-arrow.png"></img>
          </a>
              <div className="navbar-compare-dropdown">
                <a href="compare/sources" className="navbar-dropdown-item">Sources</a>
                <a href="compare/articles" className="navbar-dropdown-item">Articles</a>
            </div>
        </li>
        <li className="navbar-categories">
        <a href="/categories" className="navbar-link">Categories
          <img className="navbar-dropdown-arrow" src="../images/dropdown-arrow.png"></img>
          </a>
          <div className="navbar-category-dropdown" >
              <Link className="navbar-dropdown-item" to = {{pathname: "/politics", state: {category: "politics"}}}>Politics</Link>
              <Link className="navbar-dropdown-item" to = {{pathname: "/world", state: {category: "world"}}}>World</Link>
              <Link className="navbar-dropdown-item" to = {{pathname: "/health", state: {category: "health"}}}>Health</Link>
              <Link className="navbar-dropdown-item" to = {{pathname: "/science", state: {category: "science"}}}>Science</Link>
            <div className="navbar-horizontal-line"></div>
          <a href="/categories" className="navbar-dropdown-item">View All</a>
        </div>
      </li>
        <input className = "navbar-search-bar" type="text" placeholder="Search"/>
        <button className="navbar-search-button"><img className="navbar-search-icon" src="../images/search.png"></img></button>
      </ul>
    </nav>
  )
}

export default Navigation;