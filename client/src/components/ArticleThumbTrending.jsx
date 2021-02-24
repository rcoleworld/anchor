import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/homepage.css';
import ProgressRing from './ProgressRing';

const ArticleThumbTrending = (props) => {
    const [progress, setProgress] = useState(0);
    const [color, setColor] = useState('');
    const colorArray = ['#7ea9e1', "#ed004f", "#00fcf0", "#d2fc00", "#7bff00", "#fa6900"];



    const randomColor = () => {
        return colorArray[Math.floor(Math.random() * colorArray.length)];
      }

    const changeProgress = () => {
        const progressValue = Math.floor(Math.random() * 101);
        setProgress(progressValue);
        const randomProgressColor = randomColor();
        setColor(randomProgressColor);
    }

    useEffect(() => {
        changeProgress(90);
    })

        return (   
            <Link className= "bias-box" to = {{
                pathname: `${props.section}/${props.id}`,
                state: {
                    article: {props}
                }}}>
                
                
                <img className= "bias-thumbnail" src={props.thumbnail} alt = "nothing here"></img>
                <div>
                <div className="bias-title">
                    {props.headline}
                </div>
                <div>
                <ProgressRing
                            progress={progress}
                            size={100}
                            strokeWidth={5}
                            circleOneStroke='#d9edfe'
                            circleTwoStroke={color}
                        />
                </div>

                </div>
                
                </Link>
        )
}


export default ArticleThumbTrending;
