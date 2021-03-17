import { Link } from 'react-router-dom';
import '../stylesheets/navigationbar.css';
import { useState } from 'react'
import { v4 as uuid } from 'uuid';

const Navigation = (props) => {
  const [searchString, setSearchString] = useState('');
  
  const changeSearchString = (e) => {
    setSearchString(e.target.value);
  }
  const [theme, setTheme] = useState('blue');
  const themeToggler = () => {
    var root = document.documentElement;

    if (theme == 'blue') {
      setTheme('light');
      var passedTheme = 'light-theme'

      root.style.setProperty('--background-color', 'white');
      root.style.setProperty('--text-color', 'black');
    }
    else if (theme == 'light') {
      setTheme('dark')
      passedTheme = 'dark-theme'

      root.style.setProperty('--background-color', '#111111');
      root.style.setProperty('--text-color', 'white');

    }
    else {
      setTheme('blue')
      passedTheme = 'blue-theme'

      root.style.setProperty('--background-color', 'rgb(42, 49, 66)');
      root.style.setProperty('--text-color', 'white');
    }
    document.getElementById("image").src = "../images/bulb-" + theme + ".png";
    props.parentCallback(passedTheme);
  }
  var theme_image = "../images/bulb-" + theme + ".png"
  window.onload = () => {
    document.getElementById("searchbar").addEventListener("keyup", function (e) {
      if (e.code === 'Enter') {
        document.getElementById("searchbutton").click();
      }
    });
  }
  return (
    <nav className="navbar">
      <Link className="navbar-left" to={{ pathname: "/" }}>
        <img className="navbar-logo" src="../images/anchor-light.png" alt=""></img>
      </Link>
      <ul className="navbar-right">
        <li className="navbar-compare">
          <Link className="navbar-link" to={{ pathname: "/about", state: { theme: { theme } } }}>About</Link>
        </li>
        <li className="navbar-compare">
          <Link className="navbar-link" to={{ pathname: "/compare" }}>Compare
            <img className="navbar-dropdown-arrow" src="../images/dropdown-arrow.png"></img>
          </Link>
          <div className="navbar-compare-dropdown">
            <Link className="navbar-dropdown-item" to={{ pathname: "/compare/sources" }}>Sources</Link>
            <Link className="navbar-dropdown-item" to={{ pathname: "/compare/articles" }}>Articles</Link>
          </div>
        </li>
        <li className="navbar-categories">
          <Link className="navbar-link" to={{ pathname: "/categories" }}>Categories
          <img className="navbar-dropdown-arrow" src="../images/dropdown-arrow.png"></img>
          </Link>
          <div className="navbar-category-dropdown" >
            <Link className="navbar-dropdown-item" to={{ pathname: "/politics" }}>Politics</Link>
            <Link className="navbar-dropdown-item" to={{ pathname: "/world" }}>World</Link>
            <Link className="navbar-dropdown-item" to={{ pathname: "/health" }}>Health</Link>
            <Link className="navbar-dropdown-item" to={{ pathname: "/science" }}>Science</Link>
            <div className="navbar-horizontal-line"></div>
            <Link className="navbar-dropdown-item" to={{ pathname: "/categories" }}>View All</Link>
          </div>
        </li>
        <input id="searchbar" className="navbar-search-bar" type="text" placeholder="Search" onChange={changeSearchString} />
        {/* UUID is unique everytime so everytime this link is clicked the key changes. This is used later in SearchResults.jsx to handle the react lifecycle of when this component updates. */}
        <Link id="searchbutton" className="navbar-search-button" key={uuid()} to={{ pathname: "/search", state: { search: searchString } }}><img className="navbar-search-icon" src="../images/search.png"></img></Link>
        <img id="image" className="navbar-color-mode-icon" src={theme_image} onClick={themeToggler}></img>
      </ul>
    </nav>
  )
}

export default Navigation;