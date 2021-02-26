import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/homepage.css';
import ProgressRing from './ProgressRing'

const ArticleThumb = (props) => {
    const [progress, setProgress] = useState(0);
    const [color, setColor] = useState('');
    const colorArray = ['#03254c', "#960019", "#00fcf0", "#d2fc00", "#7bff00", "#fa6900"];

    const changeProgress = () => {
        var bias = Math.ceil(props.bias * 100);
        setProgress(bias);
        if(bias < 50) {
            setColor(colorArray[0])
        }
        else {
            setColor(colorArray[1])
        }
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
                    <img className="default-thumbnail" src={props.thumbnail} alt=" "></img>

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
