import { Component } from 'react';
import "../stylesheets/categoriespage.css";

class Categories extends Component {
    render() {
        return (
            <div className="categories-page">
                <h1 className="categories-page-title">Categories</h1>
                <div className="categories-grid">
                    <div className="categories-grid-item">
                        <a href="/politics">
                            <img src="./images/categories/politics.jpg"></img>
                            <h2>Politics</h2>
                        </a>
                        <a href="/world">
                            <img src="./images/categories/world.jpg"></img>
                            <h2>World</h2>
                        </a>
                        <a href="/business">
                            <img src="./images/categories/business.jpg"></img>
                            <h2>Business</h2>
                        </a>
                        <a href="/sports">
                            <img src="./images/categories/sports.jpg"></img>
                            <h2>Sports</h2>
                        </a>
                    </div>
                    <div className="categories-grid-item">
                        <a href="/health">
                            <img src="./images/categories/health.jpg"></img>
                            <h2>Health</h2>
                        </a>
                        <a href="/science">
                            <img src="./images/categories/science.jpg"></img>
                            <h2>Science</h2>
                        </a>
                        <a href="/technology">
                            <img src="./images/categories/technology.jpg"></img>
                            <h2>Technology</h2>
                        </a><a href="/entertainment">
                            <img src="./images/categories/entertainment.jpg"></img>
                            <h2>Entertainment</h2>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories;