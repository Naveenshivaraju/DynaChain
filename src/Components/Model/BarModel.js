import React, { Component } from 'react';
import BarChart from '../BarChart/BarChart';
import {Button, Modal} from 'react-bootstrap'
import { useState} from "react";

function BarModel() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
    <>
    <Button variant="" onClick={handleShow} style={{backgroundColor:'white', fontSize:'18px',padding:'0px'}}>
    <i className="fas fa-expand fa-sm"></i>
    </Button>
    
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inventory Obsolescence</Modal.Title>
        </Modal.Header>
        <Modal.Body><BarChart/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
    }
    

export default BarModel;