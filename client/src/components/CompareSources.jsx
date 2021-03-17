import React, { Component } from "react";
import { useState, useEffect } from "react";

import "../stylesheets/comparesources.css";
const sources = ["../images/CNN.png", "../images/Fox News.png"]


const CompareSources = () => {
  var selected = [];

  useEffect(() => {
    select();

  });

  const select = () => {
    
    sources.map((source, index) => (
      document.getElementById(index).addEventListener("click", function() {
        var selectedSource = document.getElementById(index);
        if (selected.includes(sources[index])) {
          selectedSource.style.border= "1px solid var(--decor-color)"
          selectedSource.style.opacity= "100%"

          const i = selected.indexOf(sources[index]);
          if (index > -1) {
            selected.splice(i, 1);
          }
        }
        else {
          selectedSource.style.border= "2px solid var(--decor-color)"
          selectedSource.style.opacity= "50%"
          selected.push(sources[index]);
        }
        
        if (selected.length === 2) {
          document.getElementById("sources-button").style.display = "block";
          compare(selected[0], selected[1]);
        }
        else {
          document.getElementById("sources-button").style.display = "none";
        }
        
        
      })
    ))
  }

  const compare = (s1, s2) => {
    console.log(s1, s2);
  }
  
  return (
    <div className="compare-page">
        <h2>Compare Sources</h2>
        <div className="sources-grid">
        {sources.map((source, index) => (
          <div className="source-grid" id= {index}> 
          <img src={source} width= "200"></img>
          
          </div>
        ))}
        </div>
        <div className="compare-sources-button">
        <button id="sources-button">Compare</button>
        </div>
        
        
    </div>
  );
};

export default CompareSources;
