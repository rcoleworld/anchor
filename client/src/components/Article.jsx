import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'

const Article = (props) => {
    console.log("state", props.location.state)
        return (
            <div>
                <h1> {props.location.state.article.props.headline} </h1>
                Category: {props.location.state.article.props.category}
                <p></p>
                Published: {props.location.state.article.props.date}
                <p></p>
                <p> here's the body  </p> \
                    <b>Find this article somewhere , maybe in bed its too late</b>
            </div>
        )
}
//Notes: 
//For the body, it appears to be an array but it has keys, i can't display it atm

export default withRouter(Article);