import "../stylesheets/about.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="intro-banner">
        <div class="typewriter">
          <h1>Welcome to Anchor News.</h1>
          <p id="intro-description">news you need</p>
        </div>
      </div>
      <div className="about-master-containers">
        <div className="about-container">
          <div className="about-block ubuntu">
            <div className="ubuntu-bar">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot" id="ubuntu-orange"></span>
            </div>
            <div className="content"> The Mission </div>
          </div>
          <div className="about-block mac" id="test">
            <div className="mac-bar">
              <span class="dot" id="mac-dot-1"></span>
              <span class="dot" id="mac-dot-2"></span>
              <span class="dot" id="mac-dot-3"></span>
            </div>
            <p></p><p></p>
            <p>In our current day and age, finding reliable and unbiased news can be a challenge. The goal of Anchor is to relieve users of that burden by doing all the hard work for them. Using artifical intelligence, Anchor displays various kinds of bias that are commonly found in major news articles. We hope with this information that users may not only realize the amount of bias that can be found  in news articles, but also to be more informed on the content they consume. </p>
          </div>
        </div>
        <div className="about-container ">
          <div className="about-block mac" id="test">
            <div className="mac-bar">
              <span class="dot" id="mac-dot-1"></span>
              <span class="dot" id="mac-dot-2"></span>
              <span class="dot" id="mac-dot-3"></span>
            </div>
            <p></p>
            <p> To achieve our goals, Anchor relies on a multitude of technologies:
            </p>
            <p>
              For our APIs, we chose to use NodeJS and Express.
            </p>
            <p>
              We store all of our articles and analysis into a database using MongoDB and cache using Redis.
            </p>
            <p>
              To display all this information to you, we chose to use React for our website.
            </p>
          </div>
          <div className="about-block ubuntu">
            <div className="ubuntu-bar">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot" id="ubuntu-orange"></span>
            </div>
            <div className="content"> The Technology </div>
          </div>
        </div>
        <div className="about-container">
          <div className="about-block ubuntu">
            <div className="ubuntu-bar">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot" id="ubuntu-orange"></span>
            </div>
            <div className="content"> The Team </div>
          </div>
          <div className="about-block mac" id="test">
            <div className="mac-bar">
              <span class="dot" id="mac-dot-1"></span>
              <span class="dot" id="mac-dot-2"></span>
              <span class="dot" id="mac-dot-3"></span>
            </div>
            <p></p>
            <p> Our team consists of 6 members: </p>
            <div className="about-img-section">
              <img className="about-img" src="../images/lewis.jpg"></img>
              <img className="about-img" src="../images/marco.jpg"></img>
              <img className="about-img" src="../images/sydney.jpg"></img>
              <img className="about-img" src="../images/reggie.jpg"></img>
              <img className="about-img" src="../images/beverly.png"></img>
              <img className="about-img" src="../images/promyse.jpg"></img>
            </div>
            <p>(Left to Right) Lewis Johnson, Marco Flores, Sydney Anderson, Reggie Thomas, Beverly Coronel, and Promyse Ward</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
