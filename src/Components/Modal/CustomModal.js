import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useState } from "react";


function CustomModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /* console.log(props); */
  return (
    <>
      <Button variant="" onClick={handleShow} style={{ backgroundColor: 'white', fontSize: '18px', padding: '0px' }}>
        <i className="fas fa-expand fa-sm"></i>
      </Button>

      <Modal  size={props.size} show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.modalBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Print Chart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;