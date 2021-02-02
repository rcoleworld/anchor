import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'
import styles from '../stylesheets/articleview.css';

const Article = (props) => {
    const article = props.location.state.article.props;
    var sentences = [ ]
    console.log("article pls",article)
    article.body.map((body_info, index) => (sentences.push(body_info.sentence)))
        return (
            <div className="article">
                <div className="article-title">
                    <h2> {article.headline} </h2>
                </div>
                <div className="article-info">
                    From {article.source} | By {article.authors.map((author, index) => ( " " + author ))}
                </div>
                <div className="article-date">
                    {article.date}
                </div>
                <div>
                    <img className="article-image" src={article.thumbnail} alt = ""></img>
                </div>
                <div className="article-body">
                    {sentences.map((sentence, index) => ( sentence ))}
                </div>
                <div className="article-url">
                    <b>Find this article at: {article.url} </b>
                </div>
            </div>
        )
}
export default withRouter(Article);