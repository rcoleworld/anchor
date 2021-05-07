import "../stylesheets/spectrumbardual.css";
import { useEffect, useState, useRef } from 'react';


const SpectrumBarDual = props => {
    const {
        id,
        ballId1,
        ballId2,
        source1,
        source2,
        name,
        percentage1,
        percentage2,
        colors,
        subtitles
    } = props;
    useEffect(() => {
        var ball1 = document.getElementById(ballId1);
        var ball2 = document.getElementById(ballId2);
        var margin1 = 1050-(percentage1/100)*1050;
        var margin2 = 1050-(percentage2/100)*1050;
        ball1.style.marginLeft = margin1 + "px"
        ball2.style.marginLeft = margin2 + "px"
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
                    <div id={id} className="spectrum2">
                        <div id={ballId1} className="spectrum-ball2">
                            <img id={ballId1} className="spectrum-ball3" src={source1}></img>
                            <div className="spectrum-percentage2">{percentage1}%</div>
                        </div>
                        <div id={ballId2} className="spectrum-ball2">
                        <img id={ballId1} className="spectrum-ball3" src={source2}></img>
                            <div className="spectrum-percentage2">{percentage2}%</div>
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

export default SpectrumBarDual;