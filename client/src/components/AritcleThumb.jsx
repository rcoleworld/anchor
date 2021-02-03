import { Link } from 'react-router-dom';

const ArticleThumb = (props) => {
        return (
            
                <div className="default-box">
                <div>
                <Link to = {{
                    pathname: `${props.section}/${props.id}`,
                    state: {
                        article: {props}
                    }}}>
                    <img className= "default-thumbnail" src={props.thumbnail} alt = "nothing here"></img>
                
                </Link>
                </div>
                <div className="horizontal-line"></div>
                <div className="default-title">
                <Link to = {{
                    pathname: `${props.section}/${props.id}`,
                    state: {
                        article: {props}
                    }}}>
                    {props.headline}
                
                </Link>
                </div>
                <div className="horizontal-line"></div>
                <div className="default-description">
                    Source: {props.source} | Bias: {props.id[7]}0%
                </div>
                <div className="horizontal-line"></div>
                </div>
            
        )
}


export default ArticleThumb;
