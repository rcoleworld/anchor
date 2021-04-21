import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../stylesheets/demopopup.css';

const DemoPopup = (props) => {
  return (
    <>
      <div className="popup">
        <div className="popup-inner">
          <div className="popup-title">
            <h1>First Time Here?</h1>
          </div>
          <div className="popup-body">
            <span>
              Whether it's your first time here or some time since you've visited, we suggest looking at our demo page
              so you know how to use and interpret the data on our application!
          </span>
          </div>
          <div className="popup-buttons">
            <button onClick={props.handleClose}>Close</button>
            <button>View Demo</button>
          </div>
        </div>
      </div>
    </>
  );
}


export default DemoPopup;
