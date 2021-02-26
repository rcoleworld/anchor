import { withRouter } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleThumb from './ArticleThumb';
import '../stylesheets/categorypage.css';

const Category = ()  => {
    var category = window.location.pathname.slice(1);
    var image_source = "../images/categories/" + category + ".jpg"
    const [articles, setArticles] = useState([]);
    console.log(articles)
    useEffect(() => {
        axios.get('http://home.flores.sh:5001/articles?category=' + category).then((response) => {
        if(response.status === 200) {
            setArticles(response.data)
            console.log(response)
        }
        }).catch((error) => {
            console.log(error)
        })
    }, [category]) 


    return (
        <div className="category-page">
            <img className="category-image" src={image_source}/>
            <h1 className="category-title">{category}</h1>
            <div className="recent-articles">
            <div className="articles">
                {articles !== undefined && articles.length > 0 &&
                articles.map((article, index) => (
                <ArticleThumb
                    headline = {article.headline}
                    id = {article._id}
                    thumbnail = {article.thumbnail}
                    section = {article.section}
                    category = {article.category}
                    body = {article.body}
                    url = {article.url}
                    date = {article.firstPublishDate}
                    source = {article.publisher}
                    authors = {article.contributors}
                    bias= {article.average_bias}
                    sentiment = {article.average_sentiment}
                ></ArticleThumb>
                ))
            }
            </div>
            </div>
    </div>
    )
}

export default withRouter(Category)
