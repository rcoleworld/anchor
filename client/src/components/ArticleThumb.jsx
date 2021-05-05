import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProgressRing from "./ProgressRing";
import LazyLoad from "react-lazyload";
import SpectrumBar from "./SpectrumBar";

import "../stylesheets/homepage.css";

const ArticleThumb = (props) => {
  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState("");
  const colorArray = [
    "#03254c",
    "#960019",
    "#00fcf0",
    "#d2fc00",
    "#7bff00",
    "#fa6900",
  ];

  var sourceImage = "./images/sources/" + props.source + ".png";

  const changeProgress = () => {
    var bias = Math.ceil(props.bias * 100);
    setProgress(bias);
    if (bias < 50) {
      setColor(colorArray[1]);
    } else {
      setColor(colorArray[0]);
    }
  };

  return (
    <div className="default-box-container" onMouseEnter={changeProgress}>
      <LazyLoad>
        <Link
          className="default-box"
          to={{
            pathname: `${props.section}/${props.id}`,
            state: {
              article: { props },
            },
          }}
        >
          <div className="unhovered">
            <img
              className="default-thumbnail"
              alt=" "
              style={{
                display: "block",
                backgroundImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url(" +
                  props.thumbnail +
                  ")",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                resize: "both",
              }}
            ></img>

            <div className="default-title">{props.headline}</div>
          </div>
          <div className="hovered">
            <div className="bias-source">
              <img
                id="img-source"
                src={sourceImage}
                alt=""
                width="25"
                height="25"
              ></img>
            </div>
            <p id="thumb-section">{props.section}</p>
            {props.headline}

          </div>
        </Link>
      </LazyLoad>
    </div>
  );
};

export default ArticleThumb;
