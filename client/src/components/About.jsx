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
            <p> about the mission </p>
          </div>
        </div>
        <div className="about-container ">
          <div className="about-block mac" id="test">
          <div className="mac-bar">
              <span class="dot" id="mac-dot-1"></span>
              <span class="dot" id="mac-dot-2"></span>
              <span class="dot" id="mac-dot-3"></span>
            </div>
            <p> about the technology </p>
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
            <p> about the team </p>
          </div>
        </div>
        <div className="about-container">
          <div className="about-block mac" id="test">
          <div className="mac-bar">
              <span class="dot" id="mac-dot-1"></span>
              <span class="dot" id="mac-dot-2"></span>
              <span class="dot" id="mac-dot-3"></span>
            </div>
            <p> some extras </p>
          </div>
          <div className="about-block ubuntu">
            <div className="ubuntu-bar">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot" id="ubuntu-orange"></span>
            </div>
            <div className="content"> Extras </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
