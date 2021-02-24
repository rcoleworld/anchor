import { withRouter } from 'react-router-dom'
import '../stylesheets/articleview.css';

const Article = (props) => {
    const article = props.location.state.article.props;
    var date = article.date.replace('T00:00:00.000Z','').split("-");
    date = new Date(date[0], date[1]-1, date[2]);
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    date = month + " " + day + ", " + year
    var sentences = [ ]
    article.body.map((body_info, index) => (sentences.push(body_info.sentence)))
        return (
            <div className="article">
                <div className="article-title">
                    <h2> {article.headline} </h2>
                </div>
                <div className="article-info">
                    From {article.source.toUpperCase()} | By {article.authors.map((author, index) => ( " " + author ))}
                </div>
                <div className="article-date">
                    {date}
                </div>
                <div>
                    <img className="article-image" src={article.thumbnail} alt = ""></img>
                </div>
                <div className="article-body">
                    {sentences.map((sentence, index) => ( sentence + "" ))}
                </div>
                <div className="horizontal-line"></div>
                <div className="article-rating">
                    Bias: 15.67%    |    Objectivity: 89.34%    |    Sentiment: 67.24%
                </div>
                <div className="horizontal-line"></div>
                <div className="article-url">
                    Find this article at: <a target="_blank" href={article.url}>{article.url}</a>
                </div>
            </div>
        )
}
export default withRouter(Article);