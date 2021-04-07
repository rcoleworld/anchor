import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "node:constants";
import React, { Component } from "react";
import { useState, useEffect } from "react";

import "../stylesheets/comparesources.css";
const sourceImages = [
  "../images/sources/CNN.png",
  "../images/sources/Fox News.png",
  "../images/sources/The New York Times.png",
];
const sources = ["CNN", "Fox News", "The New York Times"];
var firstSentiment = 0;
var secondSentiment = 0;
var firstObjectivity = 0;
var secondObjectivity = 0;
var firstBias = 0;
var secondBias = 0;

const CompareSources = () => {
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
                var resultsDiv = document.getElementById("compare-title");
                document.getElementById(
                  "compare-results-container"
                ).style.display = "block";

                document.getElementById("sources-button").style.display =
                  "none";
                resultsDiv.innerHTML =
                  "Comparing " + selected[0] + " and " + selected[1];
                
                  document.getElementById("container-left").innerHTML = selected[0] + "<p>Average Objectivity: " + firstObjectivity + "</p><p>Average Sentiment:  "+ firstSentiment + "</p><p>Average Bias: </p>"+ firstBias ;
                  document.getElementById("container-right").innerHTML = selected[1]+ "<p>Average Objectivity: " + secondObjectivity + "</p><p>Average Sentiment: "+ secondSentiment + "</p><p>Average Bias: </p>" + secondBias;
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
        <button className="compare-sources-button" id="sources-button">Compare</button>
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
