import { useEffect, useState } from 'react';

import { withRouter } from 'react-router-dom'
import ArticleThumb from './ArticleThumb';
import '../stylesheets/search.css';
import axios from 'axios';

const { REACT_APP_SERVER_URL } = process.env;

const SearchResults = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`${REACT_APP_SERVER_URL}/articles/search/${props.location.state.search}?limit=18`)
      .then((response) => {
          console.log(props.location.state.search);
        if (response.status === 200) {
          setArticles(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.location.key]); // Reloads component everytime key is changed.

  return (
    <div className="search-page">
      <h1>Results</h1>
      <div className="results">
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
            objectivity={article.average_objectivity}></ArticleThumb>
        ))}
        </div>
    </div>
  );
};

export default withRouter(SearchResults);