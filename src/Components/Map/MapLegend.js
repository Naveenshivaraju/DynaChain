import React from 'react'
import {Row,Col} from 'react-bootstrap';

function MapLegend() {
    return (
        <>
            <Row>
                <Col>
                    <div className="row" className="cityiconrow" >
                        <img className="cityicon" src={'http://maps.google.com/mapfiles/kml/paddle/ylw-circle-lv.png'} alt="icon" />
                    </div>
                    <div className="row " className="cityiconName">Madrid, Spain</div>
                </Col>
                <Col>
                    <div className="row" className="cityiconrow" >
                        <img className="cityicon" src={'http://maps.google.com/mapfiles/kml/paddle/wht-circle-lv.png'} alt="icon" />
                    </div>
                    <div className="row " className="cityiconName">Munich, Germany</div>
                </Col>
                <Col>
                    <div className="row" className="cityiconrow" >
                        <img className="cityicon" src={'http://maps.google.com/mapfiles/kml/paddle/purple-circle-lv.png'} alt="icon" />
                    </div>
                    <div className="row " className="cityiconName">Cap Town, South Africa</div>
                </Col>
                <Col>
                    <div className="row" className="cityiconrow" >
                        <img className="cityicon" src={'http://maps.google.com/mapfiles/kml/paddle/grn-circle-lv.png'} alt="icon" />
                    </div>
                    <div className="row " className="cityiconName">Las Vegas, Nevada​</div>
                </Col>
                <Col>
                    <div className="row" className="cityiconrow" >
                        <img className="cityicon" src={'http://maps.google.com/mapfiles/kml/paddle/red-circle-lv.png'} alt="icon" />
                    </div>
                    <div className="row " className="cityiconName">Baton Rouge, Louisiana</div>
                </Col>
            </Row>
        </>
    )
}

export default MapLegend;
