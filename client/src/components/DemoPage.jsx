import "../stylesheets/demopage.css";
import SpectrumBar from "./SpectrumBar";

const DemoPage = () => {
  return (
    <div className="demo-page">
      <div className="demo-intro-banner">
        <div class="typewriter">
          <h1>First Time Here?</h1>
          <p id="intro-description"> </p>
        </div>
      </div>
      <div className="demo-master-containers">
        <div className="about-block ubuntu">
          <div className="ubuntu-bar">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot" id="ubuntu-orange"></span>
          </div>
          <div className="content"> What is Anchor News? </div>
        </div>
        <div className="demo-block demo-mac" id="test">
          <div className="mac-bar">
            <span class="dot" id="mac-dot-1"></span>
            <span class="dot" id="mac-dot-2"></span>
            <span class="dot" id="mac-dot-3"></span>
          </div>
          <p>
            Anchor News is a news site that collects articles from different
            sources and evaluates them in order to give readers more
            informations about the article's sentiment, objectivity and
            political bias.
          </p>
        </div>

        <div className="demo-block ubuntu" id="test">
          <div className="ubuntu-bar">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot" id="ubuntu-orange"></span>
          </div>
          <div className="content"> The Graphs </div>
        </div>
        <div className="demo-block demo-mac">
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
            <li>Political Bias: how left/right leaning an article is</li>
            <SpectrumBar
              id="spectrum-bias"
              ballId="spectrum-ball-bias"
              name=" "
              percentage={55}
              colors={["#0066ff", "#ff4d4d"]}
              subtitles={["Left Leaning", "Unbiased", "Right Leaning"]}
            />
            <li>Objectivity: how objective/subjective an article is</li>
            <SpectrumBar
              id="spectrum-objectivity"
              ballId="spectrum-ball-objectivity"
              name=" "
              percentage={13}
              colors={["#e28743", "#154c79"]}
              subtitles={["Objective", "Ambiguous", "Subjective"]}
            />

            <li>Sentiment: how positive/negative an article is</li>
            <SpectrumBar
              id="spectrum-sentiment"
              ballId="spectrum-ball-sentiment"
              name=" "
              percentage={64}
              colors={["#55185b", "#185b32"]}
              subtitles={["Positive", "Neutral", "Negative"]}
            />
          </p>
          <p>
            These graphs will show you a percentage that our AI has obtained.
            You can hover over the point in the graph to obtain the exact
            percentage.
          </p>
        </div>

        <div className="demo-block ubuntu">
          <div className="ubuntu-bar">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot" id="ubuntu-orange"></span>
          </div>
          <div className="content"> Why is that sentence biased? </div>
        </div>
        <div className="demo-block demo-mac" id="test">
          <div className="mac-bar">
            <span class="dot" id="mac-dot-1"></span>
            <span class="dot" id="mac-dot-2"></span>
            <span class="dot" id="mac-dot-3"></span>
          </div>
          <p>
            {" "}
            Our machine learning models have been given sets of data that they
            are trained on to detect various types of bias. Typically, the bias
            is only significant at levels above 75% and below 15%.{" "}
          </p>
        </div>

        <div className="demo-block ubuntu" id="test">
          <div className="ubuntu-bar">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot" id="ubuntu-orange"></span>
          </div>
          <div className="content"> Want to know more? </div>
        </div>
        <div className="demo-block demo-mac">
          <div className="mac-bar">
            <span class="dot" id="mac-dot-1"></span>
            <span class="dot" id="mac-dot-2"></span>
            <span class="dot" id="mac-dot-3"></span>
          </div>
          <p>
            {" "}
            Visit our About page to know more about our mission, technology, and
            team.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
