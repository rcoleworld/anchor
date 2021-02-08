import { Link } from 'react-router-dom';

const ArticleThumb = (props) => {
        return (
            <Link className= "default-box" to = {{
                pathname: `${props.section}/${props.id}`,
                state: {
                    article: {props}
                }}}>
                <div>
                <div>
                    <img className= "default-thumbnail" src={props.thumbnail} alt = "nothing here"></img>
                </div>
                <div className="default-title">
                    {props.headline}
                </div>
                </div>
                </Link>
            
        )
}


export default ArticleThumb;
