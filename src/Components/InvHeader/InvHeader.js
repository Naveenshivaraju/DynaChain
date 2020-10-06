import React from 'react';
import { MyContext } from '../../MyProvider';
import './InvHeader.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Inventory
    </Tooltip>
);

function InvHeader() {
    return (
        <MyContext.Consumer>
            {
                (context) => {
                    let cityname = context.state.cityname + " ";
                    let upicon = "fas fa-chevron-up " + context.state.upicon;

                    return (
                        <div style={{ paddingRight: '24px' }} className="col-md-12 d-sm-flex align-items-center justify-content-between">
                            <h3 className="text-gray-800_h">
                                {cityname}

                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 200, hide: 100 }}
                                    overlay={renderTooltip} >
                                    <a className="upicon_link" onClick={() => context.upiconClick()}>
                                        <i className={upicon}></i>
                                    </a>
                                </OverlayTrigger>

                            </h3>
                            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                                <i className="fas fa-download fa-sm text-white-50" style={{ paddingRight: '2px' }}></i>Generate Report
                             </a>
                        </div>
                    )
                }}
        </MyContext.Consumer>
    )
}

export default InvHeader;