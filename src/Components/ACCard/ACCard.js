import React, { Component } from 'react';
import './ACCard.css'

class ACCard extends Component {

    render() {
        /* console.log(this.props.ACData); */
        let ACInfo = this.props.ACData;
        let mape = Number(ACInfo.MAPE);
        let wape = Number(ACInfo.WAPE);
        let mapeColor = null;
        let wapeColor = null;

        if(mape <= 40 ) {
            mapeColor='danger1';
        }
        else if (mape > 40 && mape <= 70 ) {
            mapeColor= 'warning1';
        }
        else {
            mapeColor='success1';
        }

        if(wape <= 40 ) {
            wapeColor='danger1';
        }
        else if (wape > 40 && wape <= 70 ) {
            wapeColor= 'warning1';
        }
        else {
            wapeColor='success1';
        }
        
        return (
            <>
            {console.log(ACInfo)}
                <div className="card smallcard">
                    <div className="card-body">
                    <h5 className="card-title mb-4">{ACInfo.activityCenterName}</h5>
                    <h1 className="display-5 mt-1 mb-3">{ACInfo.progressValue}</h1>
                    </div>
                    <div className="card-stats">
                        <div className={mapeColor + " stat"}>
                            <div className="value">{ACInfo.MAPE}%</div>
                            <div className="type">MAPE</div>
                        </div>
                        <div className="stat vl">
                        </div>
                        <div className={wapeColor + " stat"}>
                            <div className="value">{ACInfo.WAPE}%</div>
                            <div className="type">WAPE</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ACCard
