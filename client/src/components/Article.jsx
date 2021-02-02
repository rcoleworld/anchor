import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'

const Article = (props) => {
    const article = props.location.state.article.props;
    var sentences = [ ]
    article.body.map((body_info, index) => (sentences.push(body_info.sentence)))
        return (
            <div>
                <div className="title">
                    <h2> {article.headline} </h2>
                </div>
                <div className="author">
                    From {article.source} | By {article.authors.map((author, index) => ( " " + author ))}
                </div>
                <div className="date">
                    {article.date}
                </div>
                <div className="image">
                    <img src={article.thumbnail}></img>
                </div>
                <div className="body">
                    {sentences.map((sentence, index) => ( sentence ))}
                </div>
                <div className="url">
                    <b>Find this article at: {article.url} </b>
                </div>
            </div>
        )
}
export default withRouter(Article);