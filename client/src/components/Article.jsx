import { withRouter } from "react-router-dom";
import { useState } from "react";
import "../stylesheets/articleview.css";
import SpectrumBar from "./SpectrumBar";
import React, { useEffect } from "react";
import axios from "axios";

const { REACT_APP_SERVER_URL } = process.env;

const defaultArticle = {
  "authors": [
    "Alexandria Hein",
    "David Aaro"
],
"id": "607d9d1e7a348f0020558c55",
"url": "https://www.foxnews.com/health/coronavirus-in-us-state-by-state-breakdown",
"date": "2020-05-07T12:09:33.000Z",
"headline": "Coronavirus in the US: State-by-state breakdown",
"section": "health",
"thumbnail": "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/162d324d-978e-4e4b-8905-05a179879fae/e6089be8-5b7f-43f8-87dc-da86fa21a95b/1280x720/match/image.jpg",
"body": [
    [
        "Get all the latest news on coronavirus and more delivered daily to your inbox.",
        0.9980278015136719,
        0.9704023599624634,
        0.562663197517395
    ],
    [
        "Sign up here.",
        0.9972244501113892,
        0.9742332696914673,
        0.5671975016593933
    ],
    [
        "As of Monday morning, the novel coronavirus has infected more than 141,438,278 people across 192 countries and territories, resulting in at least 3,020,688 deaths.",
        0.9950703382492065,
        0.676948070526123,
        0.5788543224334717
    ],
    [
        "In the U.S., all 50 states plus the District of Columbia have reported confirmed cases of COVID-19, tallying more than 31,670,041 illnesses and at least 567,217 deaths.",
        0.9992283582687378,
        0.9025897979736328,
        0.5597905516624451
    ],
    [
        "Here's a look at the 10 states with the most cases: \n1.",
        0.9994722604751587,
        0.9537893533706665,
        0.5483156442642212
    ],
    [
        "California: 3,718,210 cases\n2.",
        0.999542772769928,
        0.9536205530166626,
        0.541312038898468
    ],
    [
        "Texas: 2,850,575 cases\n3.",
        0.9995055198669434,
        0.9666938781738281,
        0.5393960475921631
    ],
    [
        "Florida: 2,168,901 cases \n4.",
        0.999521017074585,
        0.9714161157608032,
        0.5401296019554138
    ],
    [
        "New York: 1,998,912 cases\n5.",
        0.9995355606079102,
        0.971526026725769,
        0.540031909942627
    ],
    [
        "Illinois: 1,302,134 cases \n6.",
        0.9995343685150146,
        0.9735642671585083,
        0.5408903956413269
    ],
    [
        "Pennsylvania: 1,107,673 cases\n7.",
        0.9993528127670288,
        0.9818515777587891,
        0.5407072305679321
    ],
    [
        "Georgia: 1,084,272 cases\n8.",
        0.9993060827255249,
        0.9835301637649536,
        0.5439324975013733
    ],
    [
        "Ohio: 1,053,175 cases\n9.",
        0.9992837309837341,
        0.9838943481445312,
        0.5457758903503418
    ],
    [
        "New Jersey: 978,853 cases \n10.",
        0.9992649555206299,
        0.9852631092071533,
        0.5486589670181274
    ],
    [
        "North Carolina: 943,693 cases \nHere's a look at the top 10 states with the most deaths: \n1.",
        0.9995462894439697,
        0.9959479570388794,
        0.5354756116867065
    ],
    [
        "California: 61,038 deaths \n2.",
        0.9994642734527588,
        0.9954177141189575,
        0.5392836928367615
    ],
    [
        "New York: 51,579 deaths \n3.",
        0.9994661808013916,
        0.9952424764633179,
        0.5407531261444092
    ],
    [
        "Texas: 49,595 deaths\n4.",
        0.9994430541992188,
        0.9951856136322021,
        0.5404790043830872
    ],
    [
        "Florida: 34,439 deaths \n5.",
        0.9994434118270874,
        0.9950944185256958,
        0.5407685041427612
    ],
    [
        "Pennsylvania: 25,665 deaths\n6.",
        0.9994167685508728,
        0.994830846786499,
        0.5421783924102783
    ],
    [
        "New Jersey: 25,143 deaths\n7.",
        0.9997013807296753,
        0.9923407435417175,
        0.5364347696304321
    ],
    [
        "Illinois: 23,955 deaths\n8.",
        0.9996813535690308,
        0.9919160604476929,
        0.5367944240570068
    ],
    [
        "Georgia: 19,758 deaths\n9.",
        0.999649167060852,
        0.991830050945282,
        0.53590327501297
    ],
    [
        "Ohio: 18,991 deaths\n10.",
        0.9996229410171509,
        0.9916603565216064,
        0.5356607437133789
    ],
    [
        "Michigan: 17,934 deaths\nThis file will be updated regularly.",
        0.9997654557228088,
        0.9934064149856567,
        0.5394259691238403
    ]
],
"category": "health",
"source": "Fox News",
"bias": 0.9991628122329712,
"sentiment": 0.9672878217697144,
"objectivity": 0.5448325324058533,
"__v": 0
};

const Article = (props) => {

  const [bias, setBias] = useState(false);
  const [sentiment, setSentiment] = useState(false);
  const [objectivity, setObjectivity] = useState(false);
  const [executed, setExecuted] = useState(false);
  const [articles, setArticles] = useState([]);

  var article = defaultArticle;
  if(props.location.state){ article = props.location.state.article.props }
  var id = window.location.pathname.split('/');
  id = id[id.length - 1];
  useEffect(() => {
    axios
      .get(`${REACT_APP_SERVER_URL}/articles?id=${id}`)
      .then((response) => {
        if (response.status === 200) {
          setArticles(response.data);
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  var articleLoaded = articles.length > 0;
  if (articleLoaded) {
    article = articles[0];
  }

  var imgSrc = "../images/sources/" + (articleLoaded ? article.publisher : article.source) + ".png";
  var date = (articleLoaded) ? article.firstPublishDate.split("T")[0].split("-") : article.date.split("T")[0].split("-");
  date = new Date(date[0], date[1] - 1, date[2]);
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  date = month + " " + day + ", " + year;
  var sentences = article.body.map((body_info) => body_info[0]);
  var biases = article.body.map((body_info) => body_info[1]);
  var sentiments = article.body.map((body_info) => body_info[2]);
  var objectivitys = article.body.map((body_info) => body_info[2]);
  var averageBias = (articleLoaded) ? (article.average_bias * 100).toFixed(2) : (article.bias * 100).toFixed(2);
  var avgerageSentiment = (articleLoaded) ? (article.average_sentiment * 100).toFixed(2) : (article.sentiment * 100).toFixed(2);
  var avgerageObjectivity = (articleLoaded) ? (article.average_objectivity * 100).toFixed(2) : (article.objectivity * 100).toFixed(2);
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
            {/* By {article.authors.map((author, index) => " " + author)} */}
            By {articleLoaded ? article.contributors.map((author, index) => " " + author) : article.authors.map((author, index) => " " + author)}
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
