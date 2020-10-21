import React, {useState} from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './ConfidenceUI.css';

function ConfidenceUI() {
    const [confidence, setConfidence] = useState(() => {
        console.log("It will run only one time.")
        return 'Confidence'
    });

    function handleOnChange(event) {
        console.log("Event value : "+event.target.value)
        console.log("Confidence value :"+confidence)
        setConfidence(event.target.value)
    }
    return (
        <div className="confidence-card">
            <Row className="confidence-block">
                <Col className="padded-zero-col">
                    <div className="confidence-block-element">
                        <select value={confidence} onChange={handleOnChange}>
                            <option value="Confidence">Confidnce</option>
                            <option value='90'>90%</option>
                            <option value='95'>95%</option>
                            <option value='99'>99%</option>
                        </select>
                    </div>
                </Col>
                <Col className="padded-zero-col">
                    <div className="confidence-block-element">
                    <input type="date" className="period-date"/>
                    </div>
                </Col>
                <Col className="padded-zero-col">
                    <div className="confidence-block-element">
                    <input type="text" className="period-count" size="7" maxLength='2' pattern= "[0-9]" placeholder="Periods" />
                    </div>
                </Col>
                <Col className="padded-zero-col">
                    <div className="confidence-block-element">
                    <Button type="submit" className="btn-primary">Update</Button>
                    </div>
                </Col>
            </Row>
            <Row className="ULHeader">
                <Col className="padded-zero-col">
                    <div className="UL-block-element">
                    <Card className="text-center  UL-info-card">
                        <Card.Header>Lower(U)</Card.Header>
                        <Card.Body>
                            <Card.Title>150,904​</Card.Title>
                        </Card.Body>
                    </Card>
                    </div>
                </Col>

                <Col className="padded-zero-col">
                    <div className="UL-block-element">
                    <Card className="text-center  UL-info-card">
                        <Card.Header>Lower($)</Card.Header>
                        <Card.Body>
                            <Card.Title>$4,150,904​</Card.Title>
                        </Card.Body>
                    </Card>
                    </div>
                </Col>

                <Col className="padded-zero-col">
                    <div className="UL-block-element">
                    <Card className="text-center  UL-info-card">
                        <Card.Header>Upper(U)</Card.Header>
                        <Card.Body>
                            <Card.Title>150,904​</Card.Title>
                        </Card.Body>
                    </Card>
                    </div>
                </Col>

                <Col className="padded-zero-col">
                    <div className="UL-block-element">
                    <Card className="text-center UL-info-card">
                        <Card.Header>Upper($)</Card.Header>
                        <Card.Body>
                            <Card.Title>$2,150,904​</Card.Title>
                        </Card.Body>
                    </Card>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ConfidenceUI;
