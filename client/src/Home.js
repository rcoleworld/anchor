import React, { useEffect, useState } from "react";
import LazyLoad from 'react-lazyload';
import ArticleThumbTrending from "./components/ArticleThumbTrending";
import ArticleThumb from "./components/ArticleThumb";
import axios from "axios";
import "./stylesheets/homepage.css";
import DemoPopup from "./components/DemoPopup";
import Cookies from 'js-cookie';

const { REACT_APP_SERVER_URL } = process.env;

const defaultArticle = {
  contributers: ["Christina Vercelletto"],
  _id: "6019da8859883600218dbb70",
  url:
    "https://www.cnn.com/2020/11/19/cnn-underscored/best-gifts-for-dog-lovers/index.html",
  firstPublishDate: "2020-12-15T00:00:00.000Z",
  lastPublishDate: "2020-12-15T00:00:00.000Z",
  headline: "41 gifts for pets and the people who love them",
  section: "Underscored",
  thumbnailUrl:
    "https://cdn.cnn.com/cnnnext/dam/assets/201118122307-petgiftslead1-super-169.jpg",
  body: [
    {
      sentence:
        "Pets can be a little like toddlers in that they’re known to play with (or in) the box the present comes in",
      biasDetectionResult: null,
      objectivityDetectionResult: null,
      sentimentDetectionResult: null,
    },
    {
      sentence:
        "But that doesn’t mean they shouldn’t be indulged at the holidays with really great stuff",
      biasDetectionResult: null,
      objectivityDetectionResult: null,
      sentimentDetectionResult: null,
    },
    {
      sentence:
        "Cashmere sweater? French-style pet macarons? Nothing’s too good for the other pea in your quarantine pod",
      biasDetectionResult: null,
      objectivityDetectionResult: null,
      sentimentDetectionResult: null,
    },
    {
      sentence: "They haven’t left your side",
      biasDetectionResult: null,
      objectivityDetectionResult: null,
      sentimentDetectionResult: null,
    },
    {
      sentence: "Ever",
      biasDetectionResult: null,
      objectivityDetectionResult: null,
      sentimentDetectionResult: null,
    },
    {
      sentence: "So it’s time to lay on the holiday love",
      biasDetectionResult: null,
      objectivityDetectionResult: null,
      sentimentDetectionResult: null,
    },
    {
      sentence:
        "On a tight budget this year? Lots of folks are this year, so we have fun ideas for as little as $3.99",
      biasDetectionResult: null,
      objectivityDetectionResult: null,
      sentimentDetectionResult: null,
    },
    {
      sentence:
        "Whether your heart belongs to a gentle giant of a dog or a tiny fluffball kitten, celebrate the interspecies bond you share with a token of your gratitude for their unconditional love",
      biasDetectionResult: null,
      objectivityDetectionResult: null,
      sentimentDetectionResult: null,
    },
    {
      sentence:
        "Oh, and we have really fun picks for the other pet lovers in your life too",
      biasDetectionResult: null,
      objectivityDetectionResult: null,
      sentimentDetectionResult: null,
    },
    {
      sentence:
        "If these gifts don’t strike your fancy, check out our roundups of gifts for her, gifts for him, practical gifts, Amazon 5-star gifts, top-rated Nordstrom gifts and gifts for everyone else.",
      biasDetectionResult: null,
      objectivityDetectionResult: null,
      sentimentDetectionResult: null,
    },
  ],
  category: "Pets",
  publisher: "CNN",
  __v: 0,
};

const Home = () => {
  //Set Demo Pop up
  const [demoCookie, setDemoCookie] = useState([]);
  const [show, setShow] = useState(false);
  // Set Recent Articles
  const [articles, setArticles] = useState([]);
  // Set Right and Left Articles
  const [mostBiasArticles, setMostBiasArticles] = useState([]);
  const [leastBiasArticles, setLeastBiasArticles] = useState([]);
  // Set Least/Most Sentiment Articles
  const [mostSentimentArticles, setMostSentimentArticles] = useState([]);
  const [leastSentimentArticles, setLeastSentimentArticles] = useState([]);
  // Set Least/Most Objectivity Articles
  const [mostObjectivityArticles, setMostObjectivityArticles] = useState([]);
  const [leastObjectivityArticles, setLeastObjectivityArticles] = useState([]);
  

  // Start of DEMO Popup Stuff
  const handleClose = () => {
    setShow(false);
    handleState();
    }

  const handleState = () => {
    if(Cookies.get('displayDemo')) setDemoCookie(Cookies.get('displayDemo'));
    } 

  let demoModal = () => {
    if (demoCookie === false) {
      setTimeout(() => { 
        setShow(true);
      }, 2000);
      return <DemoPopup  show={show} status={handleState} handleClose={handleClose}/>
    }
  }
  
  useEffect(() => {
    console.log(Cookies.get('displayDemo'));
    axios
      .get(`${REACT_APP_SERVER_URL}/cookieDemo`, {withCredentials: true})
      .then((response) => {
        if (response) {
          console.log(Cookies.get('displayDemo'));
          if(response.status === 200) setDemoCookie(Cookies.get('displayDemo'));
          else{
            // response is 204
            setDemoCookie(false);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // End of Deo Pop Up Stuff 

  // Recent Articles
  const [rateLimited, setRateLimited] = useState(false);
  // Recent Articles 
  useEffect(() => {
    axios
      .get(`${REACT_APP_SERVER_URL}/articles?limit=400&orderBy=firstPublishDate&orderType=des`)
      .then((response) => {
        if (response.status === 200) {
          setArticles(response.data);
        }else {
          setArticles([defaultArticle]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); //will change, it's to load all articles at once when the page loads 

  // Most Bias Articles
  useEffect(() => {
    axios
      .get(`${REACT_APP_SERVER_URL}/articles?orderBy=average_bias&limit=3`)
      .then((response) => {
        if (response.status === 200) {
          setMostBiasArticles(response.data);
        } else {
          setMostBiasArticles([defaultArticle]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // Least Bias Articles
  useEffect(() => {
    axios
      .get(`${REACT_APP_SERVER_URL}/articles?orderBy=average_bias&orderType=asc&limit=3`)
      .then((response) => {
        if (response.status === 200) {
          setLeastBiasArticles(response.data);
        } else {
          setLeastBiasArticles([defaultArticle]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Most Sentiment Articles
  useEffect(() => {
    axios
      .get(`${REACT_APP_SERVER_URL}/articles?orderBy=average_sentiment&limit=3`)
      .then((response) => {
        if (response.status === 200) {
          setMostSentimentArticles(response.data);
        } else {
          setMostSentimentArticles([defaultArticle]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // Least Sentiment Articles
  useEffect(() => {
    axios
      .get(
        `${REACT_APP_SERVER_URL}/articles?orderBy=average_sentiment&orderType=asc&limit=3`
      )
      .then((response) => {
        if (response.status === 200) {
          setLeastSentimentArticles(response.data);
        } else {
          setLeastSentimentArticles([defaultArticle]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Most Sentiment Articles
  useEffect(() => {
    axios
      .get(`${REACT_APP_SERVER_URL}/articles?orderBy=average_objectivity&limit=3`)
      .then((response) => {
        if (response.status === 200) {
          setMostObjectivityArticles(response.data);
        } else {
          setMostObjectivityArticles([defaultArticle]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // Least Sentiment Articles
  useEffect(() => {
    axios
      .get(`${REACT_APP_SERVER_URL}/articles?orderBy=average_objectivity&orderType=asc&limit=3`
      )
      .then((response) => {
        if (response.status === 200) {
          setLeastObjectivityArticles(response.data);
        } else {
          setLeastObjectivityArticles([defaultArticle]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <>
  {!rateLimited ?  
    <div className="Home">
      {demoModal()}
      <div className="title-class">
        <p id="anchor-title">Anchor News</p>
      </div>
      <div className="bias-articles">
          <div className="most-least-container">
            <h1 id="bias-title">Left Leaning</h1>
            {mostBiasArticles !== undefined &&
              mostBiasArticles.length > 0 &&
              mostBiasArticles.map((article, index) => (
                <LazyLoad heighy={250} once>
                <ArticleThumbTrending
                  headline={article.headline}
                  id={article._id}
                  thumbnail={article.thumbnail}
                  section={article.section}
                  category={article.category}
                  body={article.body}
                  url={article.url}
                  date={article.firstPublishDate}
                  source={article.publisher}
                  authors={article.contributors}
                  bias={article.average_bias}
                  sentiment={article.average_sentiment}
                  objectivity={article.average_objectivity}
                ></ArticleThumbTrending>
                </LazyLoad>
              ))}
          </div>
          {/* <div className="vertical-row"></div> */}
          <div className="most-least-container">
            <h1 id="bias-title">Right Leaning</h1>
            {leastBiasArticles !== undefined &&
              leastBiasArticles.length > 0 &&
              leastBiasArticles.map((article, index) => (
                <ArticleThumbTrending
                  headline={article.headline}
                  id={article._id}
                  thumbnail={article.thumbnail}
                  section={article.section}
                  category={article.category}
                  body={article.body}
                  url={article.url}
                  date={article.firstPublishDate}
                  source={article.publisher}
                  authors={article.contributors}
                  bias={article.average_bias}
                  sentiment={article.average_sentiment}
                  objectivity={article.average_objectivity}
                ></ArticleThumbTrending>
              ))}
          </div>
      </div>
      <div className="bias-articles">
          <div className="most-least-container">
            <h1 id="bias-title">Positive</h1>
            {mostSentimentArticles !== undefined &&
              mostSentimentArticles.length > 0 &&
              mostSentimentArticles.map((article, index) => (
                <ArticleThumbTrending
                  headline={article.headline}
                  id={article._id}
                  thumbnail={article.thumbnail}
                  section={article.section}
                  category={article.category}
                  body={article.body}
                  url={article.url}
                  date={article.firstPublishDate}
                  source={article.publisher}
                  authors={article.contributors}
                  bias={article.average_bias}
                  sentiment={article.average_sentiment}
                  objectivity={article.average_objectivity}
                ></ArticleThumbTrending>
              ))}
          </div>
          <div className="most-least-container">
            <h1 id="bias-title">Negative</h1>
            {leastSentimentArticles !== undefined &&
              leastSentimentArticles.length > 0 &&
              leastSentimentArticles.map((article, index) => (
                <ArticleThumbTrending
                  headline={article.headline}
                  id={article._id}
                  thumbnail={article.thumbnail}
                  section={article.section}
                  category={article.category}
                  body={article.body}
                  url={article.url}
                  date={article.firstPublishDate}
                  source={article.publisher}
                  authors={article.contributors}
                  bias={article.average_bias}
                  sentiment={article.average_sentiment}
                  objectivity={article.average_objectivity}
                ></ArticleThumbTrending>
              ))}
          </div>
      </div>
      <div className="bias-articles">
          <div className="most-least-container">
            <h1 id="bias-title">Objective</h1>
            {mostObjectivityArticles !== undefined &&
              mostObjectivityArticles.length > 0 &&
              mostObjectivityArticles.map((article, index) => (
                <ArticleThumbTrending
                  headline={article.headline}
                  id={article._id}
                  thumbnail={article.thumbnail}
                  section={article.section}
                  category={article.category}
                  body={article.body}
                  url={article.url}
                  date={article.firstPublishDate}
                  source={article.publisher}
                  authors={article.contributors}
                  bias={article.average_bias}
                  sentiment={article.average_sentiment}
                  objectivity={article.average_objectivity}
                ></ArticleThumbTrending>
              ))}
          </div>
          <div className="most-least-container">
            <h1 id="bias-title">Subjective</h1>
            {leastObjectivityArticles !== undefined &&
              leastObjectivityArticles.length > 0 &&
              leastObjectivityArticles.map((article, index) => (
                <ArticleThumbTrending
                  headline={article.headline}
                  id={article._id}
                  thumbnail={article.thumbnail}
                  section={article.section}
                  category={article.category}
                  body={article.body}
                  url={article.url}
                  date={article.firstPublishDate}
                  source={article.publisher}
                  authors={article.contributors}
                  bias={article.average_bias}
                  sentiment={article.average_sentiment}
                  objectivity={article.average_objectivity}
                ></ArticleThumbTrending>
              ))}
          </div>
      </div>
      <div className="recent-articles">
        <h1> Recent Stories </h1>
        <div className="articles">
          {articles !== undefined &&
            articles.length > 0 &&
            articles.map((article, index) => (
            
              <ArticleThumb
                headline={article.headline}
                id={article._id}
                thumbnail={article.thumbnail}
                section={article.section}
                category={article.category}
                body={article.body}
                url={article.url}
                date={article.firstPublishDate}
                source={article.publisher}
                authors={article.contributors}
                bias={article.average_bias}
                sentiment={article.average_sentiment}
                objectivity={article.average_objectivity}
              ></ArticleThumb>
             
            ))}
        </div>
      </div>
    </div> : <h1>Too many request, try again in a bit!</h1>}
    </>
  );
};
export default Home;
