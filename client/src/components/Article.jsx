import { withRouter } from "react-router-dom";
import { useState } from "react";
import "../stylesheets/articleview.css";

const Article = (props) => {
  const article = props.location.state.article.props;
  const [bias, setBias] = useState(false);
  const [sentiment, setSentiment] = useState(false);

  var date = article.date.split("T")[0].split("-");
  date = new Date(date[0], date[1] - 1, date[2]);
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  date = month + " " + day + ", " + year;
  var sentences = article.body.map((body_info) => body_info[0]);
  var biases = article.body.map((body_info) => body_info[1]);
  var sentiments = article.body.map((body_info) => body_info[2]);
  var averageBias = (article.bias * 100).toFixed(2);
  var avgerageSentiment = (article.sentiment * 100).toFixed(2);

  const displayBias = () => {
      var i;
      var maxBias = [];
      var biasCopy = biases.slice();
      for (i = 0; i < 5; i++) {
        var max = Math.max(...biasCopy);
        console.log("max: " + max);
        var index = biases.indexOf(max);
        maxBias.push(index);
        // Change this later
        biasCopy[index] = 0;
      }
      var minBias = [];
      biasCopy = biases.slice();
      for (i = 0; i < 5; i++) {
        var min = Math.min(...biasCopy);
        console.log("max: " + min);
        index = biases.indexOf(min);
        minBias.push(index);
        // Change this later
        biasCopy[index] = 1;
      }
    if (!bias) {
        setBias(true);
      for (i = 0; i < maxBias.length; i++) {
        document.getElementById(maxBias[i]).style.backgroundColor = "#0066ff";
        document.getElementById(maxBias[i]).innerHTML =
          sentences[i] + "(" + (biases[maxBias[i]] * 100).toFixed(2) + "%)";
        document.getElementById(minBias[i]).style.backgroundColor = "#ff4d4d";
        document.getElementById(minBias[i]).innerHTML =
          sentences[i] + "(" + (biases[minBias[i]] * 100).toFixed(2) + "%)";
      }
    } else {
      setBias(false);
      for (i = 0; i < maxBias.length; i++) {
        document.getElementById(maxBias[i]).style.backgroundColor =
          "transparent";
        document.getElementById(maxBias[i]).innerHTML = sentences[i];
        document.getElementById(minBias[i]).style.backgroundColor =
          "transparent";
        document.getElementById(minBias[i]).innerHTML = sentences[i];
      }
    }
  };

  const displaySentiment = () => {
    var i;
    var maxSentiment = [];
    var sentimentCopy = sentiments.slice();
    for (i = 0; i < 5; i++) {
      var max = Math.max(...sentimentCopy);
      console.log("max: " + max);
      var index = sentiments.indexOf(max);
      maxSentiment.push(index);
      // Change this later
      sentimentCopy[index] = 0;
    }
    var minSentiment = [];
    sentimentCopy = sentiments.slice();
    for (i = 0; i < 5; i++) {
      var min = Math.min(...sentimentCopy);
      console.log("min: " + min);
      index = sentiments.indexOf(min);
      minSentiment.push(index);
      // Change this later
      sentimentCopy[index] = 1;
    }
    if (!sentiment) {
      setSentiment(true);
      for (i = 0; i < maxSentiment.length; i++) {
        document.getElementById(maxSentiment[i]).style.backgroundColor =
          "purple";
        document.getElementById(maxSentiment[i]).innerHTML =
          sentences[i] +
          "(" +
          (sentiments[maxSentiment[i]] * 100).toFixed(2) +
          "%)";
        document.getElementById(minSentiment[i]).style.backgroundColor =
          "green";
        document.getElementById(minSentiment[i]).innerHTML =
          sentences[i] +
          "(" +
          (sentiments[minSentiment[i]] * 100).toFixed(2) +
          "%)";
      }
    } else {
      setSentiment(false);
      for (i = 0; i < maxSentiment.length; i++) {
        document.getElementById(maxSentiment[i]).style.backgroundColor =
          "transparent";
        document.getElementById(maxSentiment[i]).innerHTML = sentences[i];
        document.getElementById(minSentiment[i]).style.backgroundColor =
          "transparent";
        document.getElementById(minSentiment[i]).innerHTML = sentences[i];
      }
    }
  };

  return (
    <div className="article">
      <div className="article-title">
        <h3> {article.headline} </h3>
      </div>
      <div className="article-info">
        From {article.source.charAt(0).toUpperCase() + article.source.slice(1)}{" "}
        | By {article.authors.map((author, index) => " " + author)}
      </div>
      <div className="article-date">{date}</div>
      <div>
        <img className="article-image" src={article.thumbnail} alt=""></img>
      </div>
      <div className="article-body" id="article-body">
        {/* {sentences.map((sentence) => ( sentence + " "))} */}
        {sentences !== undefined &&
          sentences.length > 0 &&
          sentences.map((sentence, index) => (
            <span id={index}>{sentence}</span>
          ))}
      </div>
      <div className="horizontal-line"></div>
      <div className="article-rating">
        Bias: {averageBias}% | Objectivity: tbd% | Sentiment:{" "}
        {avgerageSentiment}%
      </div>
      <div className="horizontal-line"></div>
      <button className="bias-viewer" onClick={displayBias}>
        View Bias
      </button>
      <button className="sentiment-viewer" onClick={displaySentiment}>
        View Sentiment
      </button>
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
