import React, { Component } from 'react';

class Categories extends Component {
    render() {
        return (
            <div className="Categories">
                <h1>Categories</h1>
            <p> The team: </p>
            <div className="container">
            <img className= "about-picture" src="./images/teal.jpg" alt = "nothing here"></img>
            <div className="center-category">Politics</div>
            </div>
            <div className="container">
            <img className= "about-picture" src="./images/teal.jpg" alt = "nothing here"></img>
            <div className="center-category">World</div>
            </div>
            <div className="container">
            <img className= "about-picture" src="./images/teal.jpg" alt = "nothing here"></img>
            <div className="center-category">Business</div>
            </div>
            <div className="container">
            <img className= "about-picture" src="./images/teal.jpg" alt = "nothing here"></img>
            <div className="center-category">Promyse Ward</div>
            </div>
            <div className="container">
            <img className= "about-picture" src="./images/teal.jpg" alt = "nothing here"></img>
            <div className="center-category">Science</div>
            </div>
            <div className="container">
            <img className= "about-picture" src="./images/teal.jpg" alt = "nothing here"></img>   
            <div className="center-category">Health</div>
            </div>
            <div className="container">
            <img className= "about-picture" src="./images/teal.jpg" alt = "nothing here"></img>   
            <div className="center-category">Technology</div>
            </div>    
            <div className="container">
            <img className= "about-picture" src="./images/teal.jpg" alt = "nothing here"></img>   
            <div className="center-category">Entertainment</div>
            </div>              
            </div>
        )
    }
}

export default Categories;