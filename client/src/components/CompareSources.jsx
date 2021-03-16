import React, { Component } from "react";

import "../stylesheets/compare.css";
const sources = ["../images/CNN.png", "../images/Fox News.png"]


const CompareSources = () => {
  return (
    <div className="compare-page">
        Compare Sources
        <div className="sources-grid">
        {sources.map((source, index) => (
          <img src={source} width= "200"></img>
        ))}
        </div>
        
        
    </div>
  );
};

export default CompareSources;
