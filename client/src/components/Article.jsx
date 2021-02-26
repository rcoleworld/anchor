import { withRouter } from 'react-router-dom'
import '../stylesheets/articleview.css';

const Article = (props) => {
    const article = props.location.state.article.props;
    const datetime = article.date.split("T");
    var date = datetime[0].split("-");
    const time = datetime[1].split(":");
    time[2] = time[2].replace('Z','');
    date = new Date(date[0], date[1]-1, date[2]);
    console.log(date);
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    date = month + " " + day + ", " + year
    var sentences = article.body.map((body_info) => (body_info[0]))
    var biases = article.body.map((body_info) => (body_info[1]))
    var avgBias = (article.bias * 100).toFixed(2);
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
                <div className="article-body">
                {sentences.map((sentence) => ( sentence + " "))}
                </div>
                <div className="horizontal-line"></div>
                <div className="article-rating">
                    Bias: {avgBias}%    |    Objectivity: tbd%    |    Sentiment: tbd%
                </div>
                <div className="horizontal-line"></div>
                <div className="article-url">
                    Find this article at: <a target="_blank" href={article.url}>{article.url}</a>
                </div>
            </div>
        )
}
export default withRouter(Article);