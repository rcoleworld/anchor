import { withRouter } from 'react-router-dom'
import '../stylesheets/categorypage.css';

const Category = (props) => {
    var category = props.location.state.category;
    var source = "../images/categories/" + category + ".jpg"
    category = category.charAt(0).toUpperCase() + category.slice(1)
    return (
        <div>
            <h1>{category}</h1>
            <img className="category-image" src={source}/>
        </div>
    )
}

export default withRouter(Category)
