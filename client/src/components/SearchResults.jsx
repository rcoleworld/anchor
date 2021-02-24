import { useEffect, useState } from 'react';

import { withRouter } from 'react-router-dom'
import ArticleThumb from './AritcleThumb';
import axios from 'axios';

const SearchResults = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5001/articles/search/${props.location.state.search}`)
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
    <>
      <h1>Results</h1>
      {articles !== undefined &&
        articles.length > 0 &&
        articles.map((article, index) => (
          <ArticleThumb
            headline={article.headline}
            id={article._id}
            thumbnail={article.thumbnailUrl}
            section={article.section}
            category={article.category}
            body={article.body}
            url={article.url}
            date={article.firstPublishDate}
            source={article.publisher}
            authors={article.contributers}></ArticleThumb>
        ))}
    </>
  );
};

export default withRouter(SearchResults);