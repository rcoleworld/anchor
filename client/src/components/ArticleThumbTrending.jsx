import { Link } from "react-router-dom";

import '../stylesheets/homepage.css';

const ArticleThumbTrending = (props) => {

  var sourceImage = "./images/sources/" + props.source + ".png";

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
