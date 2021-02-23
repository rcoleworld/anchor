import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/homepage.css';
import ProgressRing from './ProgressRing'

const ArticleThumb = (props) => {
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

    return (
        <div className="default-box-container" onMouseEnter={changeProgress}>
            <Link className="default-box" to={{
                pathname: `${props.section}/${props.id}`,
                state: {
                    article: { props }
                }
            }}>

                <div className="unhovered">
                    <img className="default-thumbnail" src={props.thumbnail} alt="nothing here"></img>

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
