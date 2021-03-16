import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressRing from './ProgressRing'

import '../stylesheets/homepage.css';

const ArticleThumb = (props) => {
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

//     pointer-events: none;
//   width: 100%;
//   height: 300px;
//   background-size: contain;
//   background-position: 50% 50%;
//   resize: both;
//   background-repeat: no-repeat;
    return (
        <div className="default-box-container" onMouseEnter={changeProgress}>
            <Link className="default-box" to={{
                pathname: `${props.section}/${props.id}`,
                state: {
                    article: { props }
                }
            }}>

                <div className="unhovered">
                    <img className="default-thumbnail"  alt=" "style={{display: 'block', backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url('+props.thumbnail+')', 
                backgroundSize:'cover', backgroundPosition: '50% 50%', resize:'both'}}></img>

                    <div className="default-title">
                        {props.headline}
                    </div>
                </div>
                <div className="hovered"
                >
                    {props.headline}
                    <div id="example">
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
        </div>

    )
}


export default ArticleThumb;
