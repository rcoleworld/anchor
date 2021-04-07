import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProgressRing from "./ProgressRing";

import '../stylesheets/homepage.css';

const ArticleThumbTrending = (props) => {
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

  const changeProgress = () => {
    var bias = Math.ceil(props.bias * 100);
    setProgress(bias);
    if (bias < 50) {
      setColor(colorArray[1]);
    } else {
      setColor(colorArray[0]);
    }
  };

  var sourceImage = "./images/" + props.source + ".png";

  useEffect(() => {
    changeProgress();
  });

  return (
    <div>
      <div className="hr"></div>
      <div className="bias-box">
        <Link to={{
                pathname: `${props.section}/${props.id}`,
                state: {
                  article: { props },
                },
              }}>
        <img className="bias-thumbnail" src={props.thumbnail} alt=" "></img>
        </Link>
        <div className="bias-content">
          <div className="bias-category">{props.category}</div>
          <div className="bias-sub-content">
            <Link
              className="bias-headline"
              to={{
                pathname: `${props.section}/${props.id}`,
                state: {
                  article: { props },
                },
              }}
            >
              {props.headline}
            </Link>
            {/* <div className="bias-description">Description</div> */}
            <div className="bias-source">
            <Link to={{
                pathname: `/source/${props.source}`,
                state: {
                    source: { props },
                },
            }}>
              <img
                id="img-source"
                src={sourceImage}
                alt=""
                width="25"
                height="25"
              ></img> </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleThumbTrending;
