import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../stylesheets/demopopup.css';

const DemoPopup = (props) => {
    return (
      <>
        <Modal
            show={props.show}
            onHide={props.handleClose}
            backdrop="static"
            keyboard={false}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="modal-title-special"
        >
          <Modal.Header bsPrefix="modal-header-special" closeButton>
            <Modal.Title as="h2" bsPrefix="modal-title-special">First Time Here?</Modal.Title>
          </Modal.Header>
          <Modal.Body bsPrefix="modal-body-special">
          Whether it's your first time here or some time since you've vistied, we suggest looking at our demo page 
          so you know how to use and interpret the data on our application!         
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="medium" onClick={props.handleClose}>
              Close
            </Button>
            <Button variant="demo" size="medium">View Demo</Button> 
          </Modal.Footer>
        </Modal>
      </>
    ); 
  }


export default DemoPopup;
