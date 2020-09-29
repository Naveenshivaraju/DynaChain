import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap'
import { useState} from "react";
import TreeMap1 from '../TreeMap1/TreeMap1';

function TreeMapModel() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
    <>
    <Button variant="" onClick={handleShow} style={{backgroundColor:'white', fontSize:'18px',padding:'0px'}}>
    <i className="fas fa-expand fa-sm"></i>
    </Button>
    
      <Modal size="lg" show={show} onHide={handleClose} style={{position:'absolute'}}>
        <Modal.Header closeButton>
          <Modal.Title>Inventory Obsolescence</Modal.Title>
        </Modal.Header>
        <Modal.Body><TreeMap1 /></Modal.Body>
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
    

export default TreeMapModel;