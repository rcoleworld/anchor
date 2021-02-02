import { Link } from 'react-router-dom';
import uuid from 'uuid';
import { updateFunctionDeclaration } from 'typescript';

const ArticleThumb = (props) => {
        return (
            
            <div>
                <div className="box">
                <div className="thumbnail">
                    <img src={props.thumbnail} alt = "nothing here"></img>
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
            </div>

            
        )
}


export default ArticleThumb;
