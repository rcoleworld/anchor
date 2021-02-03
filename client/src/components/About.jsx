
import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="About">
                <h1>About</h1>
            <p> The team: </p>
            <div className="container">
            <img className= "about-picture" src="./images/beverly.png" alt = "nothing here"></img>
            Beverly Coronel
            </div>
            <div className="container">
            <img className= "about-picture" src="./images/lewis.jpg" alt = "nothing here"></img>
            Lewis Johnson
            </div>
            <div className="container">
            <img className= "about-picture" src="./images/marco.jpg" alt = "nothing here"></img>
            Marco Flores
            </div>
            <div className="container">
            <img className= "about-picture" src="./images/promyse.jpg" alt = "nothing here"></img>
            Promyse Ward
            </div>
            <div className="container">
            <img className= "about-picture" src="./images/reggie.jpg" alt = "nothing here"></img>
            Reggie Thomas
            </div>
            <div className="container">
            <img className= "about-picture" src="./images/sydney.jpg" alt = "nothing here"></img>   
            Sydney Anderson
            </div>          
            </div>
        )
    }
}

export default About;