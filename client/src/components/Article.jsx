import { withRouter } from 'react-router-dom'
import '../stylesheets/articleview.css';

const Article = (props) => {
    const article = props.location.state.article.props;
    var date = article.date.split("T")[0].split("-");
    date = new Date(date[0], date[1]-1, date[2]);
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    date = month + " " + day + ", " + year
    var sentences = article.body.map((body_info) => (body_info[0]))
    var biases = article.body.map((body_info) => (body_info[1]))
    var sentiments = article.body.map((body_info) => (body_info[2]))
    var averageBias = (article.bias * 100).toFixed(2);
    var avgerageSentiment = (article.sentiment * 100).toFixed(2);

    const displayBias = (e) => {
        document.getElementById("0").style.backgroundColor = "red"
    }
        return (
            <div className="article">
                <div className="article-title">
                    <h3> {article.headline} </h3>
                </div>
                <div className="article-info">
                    From {article.source.charAt(0).toUpperCase() + article.source.slice(1)} | By {article.authors.map((author, index) => ( " " + author ))}
                </div>
                <div className="article-date">
                    {date}
                </div>
                <div>
                    <img className="article-image" src={article.thumbnail} alt = ""></img>
                </div>
                <div className="article-body" id="article-body">
                {/* {sentences.map((sentence) => ( sentence + " "))} */}
                {sentences !== undefined &&
            sentences.length > 0 &&
            sentences.map((sentence, index) => (
              <span id={index}>{sentence}</span>
            ))}
                </div>
                <div className="horizontal-line"></div>
                <div className="article-rating">
                    Bias: {averageBias}%    |    Objectivity: tbd%    |    Sentiment: {avgerageSentiment}%
                </div>
                <div className="horizontal-line"></div>
                <button className="bias-viewer" onClick={displayBias}>View Bias</button>
                <div className="article-url">
                    Find this article at: <a target="_blank" href={article.url}>{article.url}</a>
                </div>
            </div>
        )
}
export default withRouter(Article);