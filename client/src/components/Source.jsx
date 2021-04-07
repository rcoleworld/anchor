import { withRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../stylesheets/articleview.css";
import axios from "axios";
const { REACT_APP_SERVER_URL } = process.env;

const Source = (props) => {
  const source = props.location.state.source.props;
  const [objectivity, setObjectivity] = useState([]);
  const [sentiment, setSentiment] = useState([]);
  const [bias, setBias] = useState([]);
  const [rateLimited, setRateLimited] = useState(false);

  var sources = [];

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
        if (error.response.status === 429) setRateLimited(true);
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
        if (error.response.status === 429) setRateLimited(true);
        console.log(error);
      });
  }, []);

  // Set Sentiment
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
        if (error.response.status === 429) setRateLimited(true);
        console.log(error);
      });
  }, []);

  return (
    <div className="source">
      <h1>{source.source}</h1>
      <div className="source-objectivity">
          <h2>Objectivity</h2>
        {objectivity.map((ob, index) => {
          if (ob._id === source.source) {
              return(
            <div>

              
              {ob.average}
            </div>);
          }
        })}
      </div>
      <div className="source-sentiment">
          <h2>Sentiment</h2>
        {sentiment.map((sent, index) => {
          if (sent._id === source.source) {
              return(
            <div>
              {sent.average}
            </div>);
          }
        })}
      </div>
      <div className="obj">
          <h2>Bias (Left/Right Leaning)</h2>
        {bias.map((bias, index) => {
          if (bias._id === source.source) {
              return(
            <div>

              
              {bias.average}
            </div>);
          }
        })}
      </div>
    </div>
  );
};

export default withRouter(Source);
