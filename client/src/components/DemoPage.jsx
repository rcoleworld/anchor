import "../stylesheets/demopage.css";

const DemoPage = () => {
  return (
    <div className="demo-page">
      <div className="demo-intro-banner">
        <div class="typewriter">
          <h1>First Time Here?</h1>
          <p id="intro-description"> </p>
        </div>
      </div>
      <div className="about-master-containers">
        <div className="about-block ubuntu">
          <div className="ubuntu-bar">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot" id="ubuntu-orange"></span>
          </div>
          <div className="content"> What is Anchor News? </div>
        </div>
        <div className="about-block mac" id="test">
          <div className="mac-bar">
            <span class="dot" id="mac-dot-1"></span>
            <span class="dot" id="mac-dot-2"></span>
            <span class="dot" id="mac-dot-3"></span>
          </div>
          <p>
            Anchor News is a news site that collects articles from different sources
            and evaluates them in order to give readers more informations about the article's bias, sentiment, and objectivity.
          </p>
        </div>

        <div className="about-block ubuntu" id="test">
          <div className="ubuntu-bar">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot" id="ubuntu-orange"></span>
          </div>
          <div className="content"> The Graphs </div>
        </div>
        <div className="about-block mac">
          <div className="mac-bar">
          <span class="dot" id="mac-dot-1"></span>
            <span class="dot" id="mac-dot-2"></span>
            <span class="dot" id="mac-dot-3"></span>
          </div>
          <p>
            {" "}
            When you enter an article, you will be able to view three different
            kinds of graph:{" "}
          </p>

          <p>
            <li>
              Bias(Left/Right Leaning): how left/right leaning an article is
            </li>
            <li>Objectivity: how objective/subjective an article is</li>
            <li>Sentiment: how positive/negative an article is</li>
          </p>
          <p>
            These graphs will show you a percentage that our AI has obtained.
            You can hover over the point in the graph to obtain the exact
            percentage
          </p>
        </div>

        <div className="about-block ubuntu">
          <div className="ubuntu-bar">
          <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot" id="ubuntu-orange"></span>
          </div>
          <div className="content"> Why is that sentence bias? </div>
        </div>
        <div className="about-block mac" id="test">
          <div className="mac-bar">
            <span class="dot" id="mac-dot-1"></span>
            <span class="dot" id="mac-dot-2"></span>
            <span class="dot" id="mac-dot-3"></span>
          </div>
          <p> When speaking about bias specifically, the AI determines if a 
            sentence leans more to the left or the right in the political 
            spectrum. Please note that the bias AI has an accuracy of 83%, therefore it can have flukes. </p>
        </div>

        <div className="about-block ubuntu" id="test">
          <div className="ubuntu-bar">
          <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot" id="ubuntu-orange"></span>
          </div>
          <div className="content"> Want to know more? </div>
        </div>
        <div className="about-block mac">
          <div className="mac-bar">
          <span class="dot" id="mac-dot-1"></span>
            <span class="dot" id="mac-dot-2"></span>
            <span class="dot" id="mac-dot-3"></span>
          </div>
          <p> Visit our About page to know more about our mission, technology, and team. </p>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
