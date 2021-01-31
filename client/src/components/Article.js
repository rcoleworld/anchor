import { Component } from "react";
import { Link } from 'react-router-dom'

class Article extends Component{
    render () {
        const {
                id,
                url,
                firstPublishDate,
                lastPublishDate,
                contributors,
                source,
                headline,
                section,
                thumbnail,
                description,
                body,
        } = this.props.article

        return (
            <div className="Article">
                <h1> {headline}</h1>
                <h2>By {contributors[0]} from {source}</h2>
                Published: {firstPublishDate} Category: {section}
                {thumbnail}
                <p>{body}</p>
                <Link to={{ pathname: `${url}` }} target="_blank" >
                    <b>Find this article at: {url} </b>
                </Link>
            </div>
        )
    }
}

export default Article;