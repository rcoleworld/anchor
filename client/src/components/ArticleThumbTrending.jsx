import { Link } from 'react-router-dom';
import '../stylesheets/homepage.css';

const ArticleThumbTrending = (props) => {
        return (
            
            <div className="trending-box-container">
            <Link className= "trending-box" to = {{
                pathname: `${props.section}/${props.id}`,
                state: {
                    article: {props}
                }}}>
                
                
                    <img className= "trending-thumbnail" src={props.thumbnail} alt = "nothing here"></img>
                
                <div className="trending--title">
                    <p id="headline">{props.headline}</p>
                </div>
                
                </Link>
            </div>
            
        )
}


export default ArticleThumbTrending;
