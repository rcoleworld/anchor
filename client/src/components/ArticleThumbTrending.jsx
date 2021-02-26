import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/homepage.css';
import ProgressRing from './ProgressRing';

const ArticleThumbTrending = (props) => {
    const [progress, setProgress] = useState(0);
    const [color, setColor] = useState('');
    const colorArray = ['#03254c', "#960019", "#00fcf0", "#d2fc00", "#7bff00", "#fa6900"];

    const changeProgress = () => {
        var bias = Math.ceil(props.bias * 100);
        setProgress(bias);
        if(bias < 50) {
            setColor(colorArray[1])
        }
        else {
            setColor(colorArray[0])
        }
    }

    useEffect(() => {
        changeProgress();
    })

        return (   
            <Link className= "bias-box" to = {{
                pathname: `${props.section}/${props.id}`,
                state: {
                    article: {props}
                }}}>
                
                
                <img className= "bias-thumbnail" src={props.thumbnail} alt = " "></img>
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
