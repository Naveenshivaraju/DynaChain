import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function DemandHeader() {
    return (
        <>
        <div style={{display:'flex',flexDirection:'row'}}>
                <div>
                    <h3 className="text-gray-800_h">
                    Demand
                    </h3>
                </div>
          
            <div style={{marginTop:'10px',marginLeft:'auto'}} >
                <Link to="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i className="fas fa-download fa-sm text-white-50"></i>
                    Generate Report
                </Link>
            </div>
            </div>
        </>
    )
}

export default DemandHeader
