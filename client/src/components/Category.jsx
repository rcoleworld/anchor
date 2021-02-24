import { withRouter } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleThumb from './ArticleThumb';
import '../stylesheets/categorypage.css';

const Category = ()  => {
    var category = window.location.pathname.slice(1);
    category = category.charAt(0).toUpperCase() + category.slice(1)
    var image_source = "../images/categories/" + category + ".jpg"

    const [articles, setArticles] = useState([]);
    console.log(articles)
    useEffect(() => {
        axios.get('http://127.0.0.1:5001/articles?category=' + category).then((response) => {
        if(response.status === 201) {
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
            <div className="articles">
                {articles !== undefined && articles.length > 0 &&
                articles.map((article, index) => (
                <ArticleThumb
                    headline = {article.headline}
                    id = {article._id}
                    thumbnail = {article.thumbnailUrl}
                    section = {article.section}
                    category = {article.category}
                    body = {article.body}
                    url = {article.url}
                    date = {article.firstPublishDate}
                    source = {article.publisher}
                    authors = {article.contributers}
                ></ArticleThumb>
                ))
            }
            </div>
    </div>
    )
}

export default withRouter(Category)
