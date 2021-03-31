import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DemoPopup = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    return (
      <>
        <Modal
            show={this.props.delay}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
          <Modal.Header closeButton>
            <Modal.Title>First Time Here?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          Whether it's your first time here or some time since you've vistied, we suggest looking at our demo page 
          so you can understand how to understand the data on our application!         
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">View Demo</Button> 
          </Modal.Footer>
        </Modal>
      </>
    ); 
  }


export default DemoPopup;
