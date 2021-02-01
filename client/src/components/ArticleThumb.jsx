import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const ArticleThumb = (props) => {

        return (
            <div class="box">
                <div class="thumbnail">
                    <img src={props.thumbnail}></img>
                </div>
                <div class="title">
                <Link to = {`/${props.section}/${props.id}`}>
                    {props.headline}
                </Link>
                </div>
                <div class="description">
                    {props.description}
                </div>
            </div>
        )
}


export default ArticleThumb;