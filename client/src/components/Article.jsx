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

  const displaySentenceBias = (id) => {
    if (bias){
        if (biases[id] > .67) document.getElementById(id).style.backgroundColor = "#0066ff";
        if (biases[id] < .15) document.getElementById(id).style.backgroundColor = "#ff4d4d";
        document.getElementById(id).innerHTML = sentences[id] + "(" + (biases[id] * 100).toFixed(2) + "%)";
    }
  }

  const hideSentenceBias = (id) => {
    // setTimeout(() => {
    document.getElementById(id).innerHTML = sentences[id];
    // }, 2000)
  }

  const displayBias = () => {
    if (!bias) {
        setBias(true);
        var i;
      for (i = 0; i < biases.length; i++) {
          if (biases[i] > .67) document.getElementById(i).style.backgroundColor = "#0066ff";
          if (biases[i] < .15) document.getElementById(i).style.backgroundColor = "#ff4d4d";
      }
    } else {
      setBias(false);
      for (i = 0; i < biases.length; i++) {
          document.getElementById(i).style.backgroundColor = "transparent";
          document.getElementById(i).innerHTML = sentences[i];
      }
    }
  };

  const displaySentiment = () => {
    var i;
    if (!sentiment) {
      setSentiment(true);
      for (i = 0; i < sentiments.length; i++) {
        if (sentiments[i] > .67) document.getElementById(i).style.backgroundColor = "purple";
        if (sentiments[i] < .15) document.getElementById(i).style.backgroundColor = "green";
      }
    } else {
      setSentiment(false);
      for (i = 0; i < sentiments.length; i++) {
        document.getElementById(i).style.backgroundColor = "transparent";
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
        {sentences !== undefined &&
          sentences.length > 0 &&
          sentences.map((sentence, index) => (
            <span className = "article-sentence" id={index} onMouseOver={() => displaySentenceBias(index)} onMouseOut={() => hideSentenceBias(index)}>{sentence}</span>
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
