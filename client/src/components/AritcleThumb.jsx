import { Link } from 'react-router-dom';
import '../stylesheets/homepage.css';

const ArticleThumb = (props) => {
        return (
            <div className="default-box-container">
            <Link className= "default-box" to = {{
                pathname: `${props.section}/${props.id}`,
                state: {
                    article: {props}
                }}}>
                
                
                    <img className= "default-thumbnail" src={props.thumbnail} alt = "nothing here"></img>
                
                <div className="default-title">
                    <p id="headline">{props.headline}</p>
                </div>
                
                </Link>
            </div>
            
        )
}


export default ArticleThumb;
