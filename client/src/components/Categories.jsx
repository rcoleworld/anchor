import React, { Component } from 'react';
import '../stylesheets/categoriespage.css';

class Categories extends Component {
    render() {
        return (
            <div className="categories-page">
                <h1 className="categories-page-title">Categories</h1>
                <div className="categories-grid">
                    <div className="categories-grid-item">
                        <a href="/politics">
                            <img className="categories-image" src="./images/categories/politics.jpg" alt="nothing here"></img>
                            <h1>Politics</h1>
                        </a>
                        <a href="/world">
                            <img className="categories-image" src="./images/categories/world.jpg" alt="nothing here"></img>
                            <h1>World</h1>
                        </a>
                        <a href="/business">
                            <img className="categories-image" src="./images/categories/business.jpg" alt="nothing here"></img>
                            <h1>Business</h1>
                        </a>
                        <a href="/sports">
                            <img className="categories-image" src="./images/categories/sports.jpg" alt="nothing here"></img>
                            <h1>Sports</h1>
                        </a>
                    </div>
                    <div className="categories-grid-item">
                        <a href="/health">
                            <img className="categories-image" src="./images/categories/health.jpg" alt="nothing here"></img>
                            <h1>Health</h1>
                        </a>
                        <a href="/science">
                            <img className="categories-image" src="./images/categories/science.jpg" alt="nothing here"></img>
                            <h1>Science</h1>
                        </a>
                        <a href="/technology">
                            <img className="categories-image" src="./images/categories/technology.jpg" alt="nothing here"></img>
                            <h1>Technology</h1>
                        </a><a href="/entertainment">
                            <img className="categories-image" src="./images/categories/entertainment.jpg" alt="nothing here"></img>
                            <h1>Entertainment</h1>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories;