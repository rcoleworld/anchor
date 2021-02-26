import React, { useEffect, useState } from "react";
import ArticleThumbTrending from "./components/ArticleThumbTrending";
import ArticleThumb from "./components/ArticleThumb";
import axios from "axios";
import "./stylesheets/homepage.css";

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
  const [articles, setArticles] = useState([]);
  const [mostBiasArticles, setMostBiasArticles] = useState([]);
  const [leastBiasArticles, setLeastBiasArticles] = useState([]);
  // Recent Articles 
  useEffect(() => {
    axios
      .get(
        "http://home.flores.sh:5001/articles?limit=18&orderBy=firstPublishDate&orderType=des"
      )
      .then((response) => {
        if (response.status === 200) {
          setArticles(response.data);
        } else {
          setArticles([defaultArticle]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); //will change, it's to load all articles at once when the page loads /
  // Most Bias Articles
  useEffect(() => {
    axios
      .get("http://home.flores.sh:5001/articles?orderBy=average_bias&limit=3")
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
      .get("http://home.flores.sh:5001/articles?orderBy=average_bias&orderType=asc&limit=3")
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

  return (
    <div className="Home">
      <div className="title-class">
        <div className="home-title" id="anchor-title">Anchor News</div>
        <div className="logo" id="anchor-title"></div>
        {/* <a id="scroll" href="#trending">
          Get Started
        </a> */}
      </div>
      <div className="bias-articles" id="trending">
        <div className="bias-articles-container">
        <div className="most-bias-articles">
          <h1>Left Leaning</h1>
          {mostBiasArticles !== undefined &&
            mostBiasArticles.length > 0 &&
            mostBiasArticles.map((article, index) => (
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
              ></ArticleThumbTrending>
            ))}
        </div>
        <div className="least-bias-articles">
          <h1>Right Leaning</h1>
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
              ></ArticleThumbTrending>
            ))}
        </div>
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
              ></ArticleThumb>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
