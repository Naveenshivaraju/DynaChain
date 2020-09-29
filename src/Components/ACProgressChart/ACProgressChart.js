import ReactSpeedometer from "react-d3-speedometer";

import React from 'react';
const textColor = "#AAA"

const ACProgressChart = (props) => {

    let net_val = props.net_val;
    return (
        <div style={{paddingTop:'30px',paddingLeft:'5px',paddingBottom:'0px'}}>
            <ReactSpeedometer
                //fluidWidth={true}
                maxValue={500}
                value={net_val}
                needleColor="red"
                startColor="green"
                segments={5}
                endColor="blue"
                textColor="grey"
                textColor={textColor}
                ringWidth={40}
                width={210}
                height={190}
                needleTransitionDuration={4000}
                needleTransition="easeElastic"
                currentValueText="Current Value: ${value}%"
                needleHeightRatio={0.7}
                labelFontSize={"14px"}
                valueTextFontSize={"16px"}
            />
        </div>
    );
}

export default ACProgressChart;
