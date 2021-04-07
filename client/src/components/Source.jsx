import { withRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../stylesheets/articleview.css";
import axios from "axios";
import SpectrumBar from "./SpectrumBar";
import "../stylesheets/source.css";
const { REACT_APP_SERVER_URL } = process.env;

const Source = (props) => {
  const source = props.location.state.source.props;
  const [objectivity, setObjectivity] = useState([]);
  const [sentiment, setSentiment] = useState([]);
  const [bias, setBias] = useState([]);
  const [rateLimited, setRateLimited] = useState(false);
  var avgSentiment = 0;
  var avgObjectivity = 0;
  var avgBias = 0;

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
            avgObjectivity = (ob.average * 100).toFixed(2);
          }
        })}
        <SpectrumBar
          id="spectrum-objectivity"
          ballId="spectrum-ball-objectivity"
          name=" "
          percentage={avgObjectivity}
          colors={['#e28743', '#154c79']}
          subtitles={["Objective", "Ambiguous", "Subjective"]}
        />
      </div>
      <div className="source-sentiment">
          <h2>Sentiment</h2>
        {sentiment.map((sent, index) => {
          if (sent._id === source.source) {
              avgSentiment = (sent.average*100).toFixed(2);
          }
        })}
        <SpectrumBar
          id="spectrum-sentiment"
          ballId="spectrum-ball-sentiment"
          name=" "
          percentage={avgSentiment}
          colors={['#55185b', '#185b32']}
          subtitles={["Positive", "Neutral", "Negative"]}
        />
      </div>
      <div className="source-bias">
          <h2>Bias (Left/Right Leaning)</h2>
        {bias.map((bias, index) => {
          if (bias._id === source.source) {
            avgBias = (bias.average*100).toFixed(2);
          }
        })}
        <SpectrumBar
          id="spectrum-bias"
          ballId="spectrum-ball-bias"
          name=" "
          percentage={avgBias}
          colors={['#0066ff', '#ff4d4d']}
          subtitles={["Left Leaning", "Unbiased", "Right Leaning"]}
        />
      </div>
    </div>
  );
};

export default withRouter(Source);
