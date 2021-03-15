import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/homepage.css";
import ProgressRing from "./ProgressRing";

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

  useEffect(() => {
    changeProgress();
  });

  return (
    <Link
      className="bias-box"
      to={{
        pathname: `${props.section}/${props.id}`,
        state: {
          article: { props },
        },
      }}
    >
      <img className="bias-thumbnail" src={props.thumbnail} alt=" "></img>
      <div className="bias-content">
        <div className="bias-category">{props.category}</div>
        <div className="bias-sub-content">
          <div className="bias-headline">{props.headline}</div>
          {/* <div className="bias-description">Description</div> */}
          <div className="bias-source">Source: {props.source}</div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleThumbTrending;
