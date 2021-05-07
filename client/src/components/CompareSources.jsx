import React, { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../stylesheets/comparesources.css";
import SpectrumBarDual from "./SpectrumBarDual";


const CompareSources = () => {

  const [objectivity, setObjectivity] = useState([]);
  const [sentiment, setSentiment] = useState([]);
  const [bias, setBias] = useState([]);
  const sourceImages = [
    "../images/sources/CNN.png",
    "../images/sources/Fox News.png",
    "../images/sources/The New York Times.png",
    "../images/sources/New York Post.png"
  ];
  const sources = ["CNN", "Fox News", "The New York Times", "New York Post"];
  const { REACT_APP_SERVER_URL } = process.env;
  const [rateLimited, setRateLimited] = useState(false);

  const [sourceImg1, setSourceImg1] = useState([]);
  const [sourceImg2, setSourceImg2] = useState([]);
  const [firstSentiment, setFirstSentiment] = useState([]);
  const [secondSentiment, setSecondSentiment] = useState([]);
  const [firstObjectivity, setfirstObjectivity] = useState([]);
  const [secondObjectivity, setSecondObjectivity] = useState([]);
  const [firstBias, setFirstBias] = useState([]);
  const [secondBias, setSecondBias] = useState([]);

  // Set Objectivity
  useEffect(() => {
    axios
      .get(`${REACT_APP_SERVER_URL}/stats/average_objectivity`)
      .then((response) => {
        if (response.status === 200) {
          setObjectivity(response.data);
        } else {
          console.log("error objectivity");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    objectivity !== undefined &&
      objectivity.length > 0 &&
      objectivity.map((ob, index) => sources.push(ob._id));
  }, []);

  // Set Sentiment
  useEffect(() => {
    axios
      .get(`${REACT_APP_SERVER_URL}/stats/average_sentiment`)
      .then((response) => {
        if (response.status === 200) {
          setSentiment(response.data);
        } else {
          console.log("error sentiment");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Set Bias
  useEffect(() => {
    axios
      .get(`${REACT_APP_SERVER_URL}/stats/average_bias`)
      .then((response) => {
        if (response.status === 200) {
          setBias(response.data);
        } else {
          console.log("error bias");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  var selected = [];

  useEffect(() => {
    select();
  });

  const select = () => {
    sources.map((source, index) =>
      document.getElementById(index).addEventListener("click", function () {
        var selectedSource = document.getElementById(index);
        if (selected.includes(sources[index])) {
          selectedSource.style.border = "1px solid var(--decor-color)";
          selectedSource.style.opacity = "100%";

          const i = selected.indexOf(sources[index]);
          if (index > -1) {
            selected.splice(i, 1);
          }
        } else {
          selectedSource.style.border = "3px solid var(--decor-color)";
          selectedSource.style.opacity = "50%";
          selected.push(sources[index]);
        }

        if (selected.length === 2) {
          document.getElementById("sources-button").style.display = "block";
          document
            .getElementById("sources-button")
            .addEventListener("click", function () {
              if (selected.length === 2) {
                //FOR FIRST SOURCE SELECTED
                objectivity.map((ob, index) => {
                  console.log(selected[0])
                  if (ob._id === selected[0]) {
                    setfirstObjectivity((ob.average * 100).toFixed(2));
                  }
                  if (ob._id === selected[1]) {
                    setSecondObjectivity((ob.average * 100).toFixed(2));
                  }
                });

                sentiment.map((sent, index) => {
                  if (sent._id === selected[0]) {
                    setFirstSentiment((sent.average * 100).toFixed(2));
                  }
                  if (sent._id === selected[1]) {
                    setSecondSentiment((sent.average * 100).toFixed(2));
                  }
                });

                bias.map((bias, index) => {
                  if (bias._id === selected[0]) {
                    setFirstBias((bias.average * 100).toFixed(2));
                  }
                  if (bias._id === selected[1]) {
                    // setSecondBias((bias.average * 100).toFixed(2));
                    setSecondBias((50).toFixed(2));
                  }
                });

                var resultsDiv = document.getElementById("compare-title");

                document.getElementById(
                  "compare-results-container"
                ).style.display = "block";

                document.getElementById("sources-button").style.display =
                  "none";
                resultsDiv.innerHTML =
                  "Comparing " + selected[0] + " and " + selected[1];

                setSourceImg1("../images/sources/" + selected[0] + ".png");
                setSourceImg2("../images/sources/" + selected[1] + ".png");
              }
            });
        } else {
          document.getElementById("sources-button").style.display = "none";
          document.getElementById("compare-results-container").style.display =
            "none";
        }
      })
    );
  };

  return (
    <div className="compare-page">
      <h2>Compare Sources</h2>
      <div className="sources-grid">
        {sourceImages.map((source, index) => (
          <div className="source-grid" id={index}>
            <img src={source} width="200"></img>
          </div>
        ))}
      </div>
      <div className="compare-sources-button-container">
        <button className="compare-sources-button" id="sources-button">
          Compare
        </button>
      </div>
      <div id="compare-results-container">
        <h3 id="compare-title">Comparing 1 and 2</h3>
        <div id="left-right-containers">
          <SpectrumBarDual
            id="spectrum-bias"
            ballId1="source1-ball-bias"
            ballId2="source2-ball-bias"
            source1={sourceImg1}
            source2={sourceImg2}
            name="Political Bias Analysis"
            percentage1={firstBias}
            percentage2={secondBias}
            colors={['#0066ff', '#ff4d4d']}
            subtitles={["Left Leaning", "Unbiased", "Right Leaning"]}
          />
          <div className="horizontal-line2-compare"></div>
          <SpectrumBarDual
            id="spectrum-sentiment"
            ballId1="source1-ball-sentiment"
            ballId2="source2-ball-sentiment"
            source1={sourceImg1}
            source2={sourceImg2}
            name="Sentiment Analysis"
            percentage1={firstSentiment}
            percentage2={secondSentiment}
            colors={['#55185b', '#185b32']}
            subtitles={["Positive", "Neutral", "Negative"]}
          />
          <div className="horizontal-line2-compare"></div>
          <SpectrumBarDual
            id="spectrum-objectivity"
            ballId1="source1-ball-objectivity"
            ballId2="source2-ball-objectivity"
            source1={sourceImg1}
            source2={sourceImg2}
            name="Objectivity Analysis"
            percentage1={firstObjectivity}
            percentage2={secondObjectivity}
            colors={['#e28743', '#154c79']}
            subtitles={["Objective", "Ambiguous", "Subjective"]}
          />
        </div>
      </div>
    </div>
  );
};

export default CompareSources;
