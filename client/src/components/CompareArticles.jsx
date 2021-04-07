import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../stylesheets/comparearticles.css";
const { REACT_APP_SERVER_URL } = process.env;

const CompareArticles = () => {
  const [articles, setArticles] = useState([]);

  var selected = [];
  // Most Sentiment Articles
  useEffect(() => {
    axios
      .get(
        `${REACT_APP_SERVER_URL}/articles?orderBy=average_sentiment&limit=12`
      )
      .then((response) => {
        if (response.status === 200) {
          setArticles(response.data);
        } else {
          console.log("cant set articles");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="compare-articles-page">
      <h2>Compare Articles</h2>
      <div className="grids-container">
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div className="article-container" id={index}>
            <img
              className="compare-article-thumb"
              src={article.thumbnail}
              width="200"
            ></img>
            {article.headline}
          </div>
        ))}
      </div>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div className="article-container" id={index}>
            <img
              className="compare-article-thumb"
              src={article.thumbnail}
              width="200"
            ></img>
            {article.headline}
          </div>
        ))}
      </div>
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

export default CompareArticles;
