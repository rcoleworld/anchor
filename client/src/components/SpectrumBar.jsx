import "../stylesheets/spectrumbar.css";
import { useEffect, useState, useRef } from 'react';


const SpectrumBar = props => {
    const {
        id,
        ballId,
        name,
        percentage,
        colors,
        subtitles
    } = props;
    useEffect(() => {
        var ball = document.getElementById(ballId);
        var margin = 680-(percentage/100)*680;
        ball.style.marginLeft = margin + "px"
        var spectrum = document.getElementById(id);
        spectrum.style.backgroundImage = 'linear-gradient(to right, '+ colors[0] + ', grey, '+ colors[1] +')';
    });
    return (
        <>
            <h1 className="spectrum-title">{name}</h1>
            <div className="spectrum-wrapper">
                <div className="spectrum-bar-container">
                    <ul className="spectrum-percentages">
                        <li className="spectrum-percentage-left">100%</li>
                        <li className="spectrum-percentage-right">0%</li>
                    </ul>
                    <div id={id} className="spectrum">
                        <div id={ballId} className="spectrum-ball">
                            <div className="spectrum-percentage">{percentage}%</div>
                        </div>
                    </div>
                    <ul className="spectrum-subtitles">
                        <li className="spectrum-left">
                            <div className="spectrum-subtitle">{subtitles[0]}</div>
                        </li>
                        <li className="spectrum-middle">
                            <div className="spectrum-subtitle">{subtitles[1]}</div>
                        </li>
                        <li className="spectrum-right">
                            <div className="spectrum-subtitle">{subtitles[2]}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SpectrumBar;