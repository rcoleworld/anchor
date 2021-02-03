import { Link } from 'react-router-dom';

const ArticleThumb = (props) => {
        return (
            
                <div className="box">
                <div>
                    <img className= "thumbnail" src={props.thumbnail} alt = "nothing here"></img>
                </div>
                <div className="title">
                <Link to = {{
                    pathname: `${props.section}/${props.id}`,
                    state: {
                        article: {props}
                    }}}>
                    {props.headline}
                
                </Link>
                </div>
                <div className="description">
                    {props.description}
                </div>
                </div>
            
        )
}


export default ArticleThumb;
