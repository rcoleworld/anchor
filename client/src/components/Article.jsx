import { withRouter } from "react-router-dom";
import { useState } from "react";
import "../stylesheets/articleview.css";
import SpectrumBar from "./SpectrumBar";

const Article = (props) => {
  const article = props.location.state.article.props;
  const [bias, setBias] = useState(false);
  const [sentiment, setSentiment] = useState(false);
  const [objectivity, setObjectivity] = useState(false);
  const [executed, setExecuted] = useState(false);

  var imgSrc = "../images/sources/" + article.source + ".png";
  var date = article.date.split("T")[0].split("-");
  date = new Date(date[0], date[1] - 1, date[2]);
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  date = month + " " + day + ", " + year;
  var sentences = article.body.map((body_info) => body_info[0]);
  var biases = article.body.map((body_info) => body_info[1]);
  var sentiments = article.body.map((body_info) => body_info[2]);
  var objectivitys = article.body.map((body_info) => body_info[2]);
  var averageBias = (article.bias * 100).toFixed(2);
  var avgerageSentiment = (article.sentiment * 100).toFixed(2);
  var avgerageObjectivity = (article.objectivity * 100).toFixed(2);
  if (!executed) {
    window.scrollTo(0, -document.body.scrollHeight);
    setExecuted(true);
  }

  const highlightOpacity = (color1, color2, weight) => {
    var w1 = weight;
    var w2 = 1 - w1;
    var rgb = [Math.round(color1[0] * w1 + color2[0] * w2), 
      Math.round(color1[1] * w1 + color2[1] * w2), 
      Math.round(color1[2] * w1 + color2[2] * w2)];
    return rgb;
  }

  const displaySentenceBias = (id) => {
    if (bias) {
    //   if (biases[id] > .67) document.getElementById(id).style.backgroundColor = "#0066ff";
    //   if (biases[id] < .15) document.getElementById(id).style.backgroundColor = "#ff4d4d";
      // document.getElementById(id).innerHTML = sentences[id] + "(" + (biases[id] * 100).toFixed(2) + "%)";
    }
  }

  const hideSentenceBias = (id) => { document.getElementById(id).innerHTML = sentences[id]; }

  const displayBias = () => {
    if (!bias) {
      setBias(true);
      for (var i = 0; i < biases.length; i++) {
        if (biases[i] >= .5) {
          var rgb = highlightOpacity([0,102,255],[128, 128, 128],(biases[i] - .5)/.5);
          document.getElementById(i).style.backgroundColor = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
        }
          
        if (biases[i] < .5) 
        {
          var rgb = highlightOpacity([225,77,77],[128, 128, 128],(.5-biases[i])/.5);
          document.getElementById(i).style.backgroundColor = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
        }
      }
      document.getElementsByClassName("article-analysis-bias")[0].style.display = "block";
      document.getElementsByClassName("horizontal-line-bias")[0].style.display = "block";
      document.getElementsByClassName("article-analysis-bias-button")[0].style.color = "rgb(131, 131, 131)";
      window.scrollTo(0, document.body.scrollHeight);
    } 
    else {
      setBias(false);
      for (i = 0; i < biases.length; i++) {
        document.getElementById(i).style.backgroundColor = "transparent";
        document.getElementById(i).innerHTML = sentences[i];
      }
      document.getElementsByClassName("article-analysis-bias")[0].style.display = "none";
      document.getElementsByClassName("horizontal-line-bias")[0].style.display = "none";
      document.getElementsByClassName("article-analysis-bias-button")[0].style.color = "rgb(255, 255, 255)";
    }
  };

  const displaySentiment = () => {
    var i;
    if (!sentiment) {
      setSentiment(true);
      for (i = 0; i < sentiments.length; i++) {
        if (sentiments[i] >= .5) {
          var rgb = highlightOpacity([85,24,91],[128, 128, 128],(sentiments[i]-.5)/.5);
          document.getElementById(i).style.backgroundColor = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
        }
        if (sentiments[i] < .5) {
          var rgb = highlightOpacity([24,91,50],[128, 128, 128],(.5-sentiments[i])/.5);
          document.getElementById(i).style.backgroundColor = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
        }
      }
      document.getElementsByClassName("article-analysis-sentiment")[0].style.display = "block";
      document.getElementsByClassName("horizontal-line-sentiment")[0].style.display = "block";
      document.getElementsByClassName("article-analysis-sentiment-button")[0].style.color = "rgb(131, 131, 131)";
      window.scrollTo(0, document.body.scrollHeight);
    } 
    else {
      setSentiment(false);
      for (i = 0; i < sentiments.length; i++) {
        document.getElementById(i).style.backgroundColor = "transparent";
      }
      document.getElementsByClassName("article-analysis-sentiment")[0].style.display = "none";
      document.getElementsByClassName("horizontal-line-sentiment")[0].style.display = "none";
      document.getElementsByClassName("article-analysis-sentiment-button")[0].style.color = "rgb(255, 255, 255)";
    }
  };

  const displayObjectivity = () => {
    if (!objectivity) {
      setObjectivity(true);
      for (var i = 0; i < objectivitys.length; i++) {
        if (objectivitys[i] >= 0.5) {
          var rgb = highlightOpacity([226,135,67],[128, 128, 128],(objectivitys[i]-.5)/.5);
          document.getElementById(i).style.backgroundColor = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
        }
        if (objectivitys[i] < .5) {
          var rgb = highlightOpacity([21,76,121],[128, 128, 128],(.5-objectivitys[i])/.5);
          document.getElementById(i).style.backgroundColor = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
        }
      }
      document.getElementsByClassName("article-analysis-objectivity")[0].style.display = "block";
      document.getElementsByClassName("horizontal-line-objectivity")[0].style.display = "block";
      document.getElementsByClassName("article-analysis-objectivity-button")[0].style.color = "rgb(131, 131, 131)";
      window.scrollTo(0, document.body.scrollHeight);
    } 
    else {
      setObjectivity(false);
      for (i = 0; i < objectivitys.length; i++) {
        document.getElementById(i).style.backgroundColor = "transparent";
      }
      document.getElementsByClassName("article-analysis-objectivity")[0].style.display = "none";
      document.getElementsByClassName("horizontal-line-objectivity")[0].style.display = "none";
      document.getElementsByClassName("article-analysis-objectivity-button")[0].style.color = "rgb(255, 255, 255)";
    }
  };

  return (
    <div className="article">
      <div className="article-title">
        <h3> {article.headline} </h3>
      </div>
      <div className="article-info">
        <div>
        <a target="_blank" href={article.url}><img className="article-source" src={imgSrc}/></a>
        </div>
        <div>
          <div>
            By {article.authors.map((author, index) => " " + author)}
          </div>
          <div>{date}</div>
        </div>

      </div>

      <div>
        <img className="article-image" src={article.thumbnail} alt=""></img>
      </div>
      <div className="article-body" id="article-body">
        {sentences !== undefined &&
          sentences.length > 0 &&
          sentences.map((sentence, index) => (
            <span className="article-sentence" id={index} onMouseOver={() => displaySentenceBias(index)} onMouseOut={() => hideSentenceBias(index)}>{sentence}</span>
          ))}
      </div>
      <div className="article-analysis">
        <button className="article-analysis-bias-button" onClick={displayBias}>
          View Bias
      </button>|
        <button className="article-analysis-sentiment-button" onClick={displaySentiment}>
          View Sentiment
      </button>|
        <button className="article-analysis-objectivity-button" onClick={displayObjectivity}>
          View Objectivity
      </button>
      </div>
      <div className="article-analysis-bias">
        <SpectrumBar
          id="spectrum-bias"
          ballId="spectrum-ball-bias"
          name="Bias Analysis"
          percentage={averageBias}
          colors={['#0066ff', '#ff4d4d']}
          subtitles={["Left Leaning", "Unbiased", "Right Leaning"]}
        />
      </div>
      <div className="horizontal-line-bias"></div>
      <div className="article-analysis-sentiment">
        <SpectrumBar
          id="spectrum-sentiment"
          ballId="spectrum-ball-sentiment"
          name="Sentiment Analysis"
          percentage={avgerageSentiment}
          colors={['#55185b', '#185b32']}
          subtitles={["Positive", "Neutral", "Negative"]}
        />
      </div>
      <div className="horizontal-line-sentiment"></div>
      <div className="article-analysis-objectivity">
        <SpectrumBar
          id="spectrum-objectivity"
          ballId="spectrum-ball-objectivity"
          name="Objectivity Analysis"
          percentage={avgerageObjectivity}
          colors={['#e28743', '#154c79']}
          subtitles={["Objective", "Ambiguous", "Subjective"]}
        />
      </div>
      <div className="horizontal-line-objectivity"></div>
      <div className="article-url">
        Find this article at:{" "}
        <a target="_blank" href={article.url}>
          {article.url}
        </a>
      </div>
    </div>
  );
};

export default withRouter(Article);
