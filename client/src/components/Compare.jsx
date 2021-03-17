import React, { Component } from "react";

import "../stylesheets/compare.css";

const Compare = () => {
  return (
    <div className="compare-page">
      <div className="compare-banner"><p>Compare</p></div>
      
      <div className="compare-container">
        <div className="compare-sources">
          <button class="compare-button">
            Sources
            <div class="compare-button__horizontal"></div>
            <div class="compare-button__vertical"></div>
          </button>
        </div>
        <div className="compare-articles">
          <button class="compare-button">
            Articles
            <div class="compare-button__horizontal"></div>
            <div class="compare-button__vertical"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Compare;
