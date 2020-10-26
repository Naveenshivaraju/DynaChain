import React from 'react';
import { InputGroup, Button, FormControl, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function ConfidenceForm() {
    return (
        <>
            <Form inline>
                <Row>
                <Col md='auto'>
                <Form.Group>
                    <Form.Label className="mb-2 mr-sm-2" htmlFor="confidenceSelect">
                        Confidence 
                    </Form.Label>
                    <Form.Control
                        as="select"
                        className="mb-2 mr-sm-2"
                        id="confidenceSelect"
                        required
                        custom
                    >
                        <option value="">Choose...</option>
                        <option value="90">90%</option>
                        <option value="95">95%</option>
                        <option value="99">99%</option>
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col md='auto'>
                <Form.Group>
                    <Form.Label className="mb-2 mr-sm-2" htmlFor="inlineFormInputName2">
                        Start Date 
                    </Form.Label>
                    <Form.Control
                        type="date"
                        className="mb-2 mr-sm-2"
                        id="inlineFormInputName2"
                        placeholder="Start Date"
                        required
                    />
                </Form.Group>
                </Col>
                <Col md="auto">
                <Form.Group>
                    <Form.Label className="mb-2 mr-sm-2" htmlFor="timeBucketSelect">
                        Time Bucket 
                    </Form.Label>
                    <Form.Control
                        as="select"
                        className="mb-2 mr-sm-2"
                        id="timeBucketSelect"
                        required
                        custom
                    >
                        <option value="">Choose...</option>
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="quarter">Quarter</option>
                        <option value="year">Year</option>
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col md='auto'>
                <Form.Group>
                    <Form.Label className="mb-2 mr-sm-2" htmlFor="inlineFormInputName">
                        Periods 
                    </Form.Label>
                    <Form.Control
                        type="number"
                        min="0"
                        max="20"
                        style={{ width: '150px' }}
                        /* defaultValue={7} */
                        className="mb-2 mr-sm-2"
                        id="inlineFormInputName"
                        placeholder="Periods"
                        required
                    />
                </Form.Group>
                </Col>
                <Col md='auto'>
                    <Button type="submit" className="mb-2">
                        Update
                    </Button>
                </Col>
                </Row>
            </Form>
        </>
    )
}

export default ConfidenceForm
