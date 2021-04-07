import React, { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../stylesheets/comparesources.css";


const CompareSources = () => {

  const [objectivity, setObjectivity] = useState([]);
const [sentiment, setSentiment] = useState([]);
const [bias, setBias] = useState([]);
const sourceImages = [
  "../images/sources/CNN.png",
  "../images/sources/Fox News.png",
  "../images/sources/The New York Times.png",
];
const sources = ["CNN", "Fox News", "The New York Times"];
const { REACT_APP_SERVER_URL } = process.env;
const [rateLimited, setRateLimited] = useState(false);

var firstSentiment = 0;
var secondSentiment = 0;
var firstObjectivity = 0;
var secondObjectivity = 0;
var firstBias = 0;
var secondBias = 0;

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
                    firstObjectivity = (ob.average * 100).toFixed(2);
                  }
                  if (ob._id === selected[1]) {
                    secondObjectivity = (ob.average * 100).toFixed(2);
                  }
                });

                sentiment.map((sent, index) => {
                  if (sent._id === selected[0]) {
                    firstSentiment = (sent.average * 100).toFixed(2);
                  }
                  if (sent._id === selected[1]) {
                    secondSentiment = (sent.average * 100).toFixed(2);
                  }
                });

                bias.map((bias, index) => {
                  if (bias._id === selected[0]) {
                    firstBias = (bias.average * 100).toFixed(2);
                  }
                  if (bias._id === selected[1]) {
                    secondBias = (bias.average * 100).toFixed(2);
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

                document.getElementById("container-left").innerHTML =
                  selected[0] +
                  "<p>Average Objectivity: " +
                  firstObjectivity +
                  "</p><p>Average Sentiment:  " +
                  firstSentiment +
                  "</p><p>Average Bias: " +
                  firstBias +
                  "</p>";
                document.getElementById("container-right").innerHTML =
                  selected[1] +
                  "<p>Average Objectivity: " +
                  secondObjectivity +
                  "</p><p>Average Sentiment: " +
                  secondSentiment +
                  "</p><p>Average Bias: " +
                  secondBias +
                  "</p>";
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
        <p id="compare-title">Comparing 1 and 2</p>
        <div id="left-right-containers">
          <div id="container-left">hi</div>

          <div id="container-right">hello</div>
        </div>
      </div>
    </div>
  );
};

export default CompareSources;
