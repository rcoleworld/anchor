import { Link } from 'react-router-dom';
import '../stylesheets/homepage.css';

const ArticleThumbTrending = (props) => {
        return (
            
                <div className="trending-box">
                <div>
                <Link to = {{
                    pathname: `${props.section}/${props.id}`,
                    state: {
                        article: {props}
                    }}}>
                    <img className= "trending-thumbnail" src={props.thumbnail} alt = "nothing here"></img>
                
                </Link>
                </div>
                <div className="trending-title">
                <Link to = {{
                    pathname: `${props.section}/${props.id}`,
                    state: {
                        article: {props}
                    }}}>
                    {props.headline}
                
                </Link>
                </div>
                <div className="trending-description">
                    Source: {props.source} | Bias: {props.id[7]}0%
                </div>
                </div>
            
        )
}


export default ArticleThumbTrending;
