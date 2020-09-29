import React from 'react';
import { MyContext } from '../../MyProvider';


function InvHeader() {
    return (
        <MyContext.Consumer>
        { (context) => {
           let cityname = context.state.cityname;
        return (
        <div  style={{paddingRight:'24px'}} className="col-md-12 d-sm-flex align-items-center justify-content-between">
            <h3 className="text-gray-800_h">{cityname} Inventory</h3>
            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i className="fas fa-download fa-sm text-white-50" style={{paddingRight:'2px'}}></i>Generate Report
            </a>
          </div>
        )}}
        </MyContext.Consumer>
    )
}

export default InvHeader;
