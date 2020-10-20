import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import data1 from './data1.json'
import data2 from './data2.json';
import data3 from './data3.json';
import data4 from './data4.json';
import data5 from './data5.json';
import { Card } from 'react-bootstrap';
import { MyContext } from '../../MyProvider';


let data=null;
let dataNumber = 1;

const BarChart = () => (

    <MyContext.Consumer>
        { (context) => {
            dataNumber = context.state.dataNumber;
            if(dataNumber === 1)
            {
                data=data1;
            }
            else if (dataNumber === 2) {
                data=data2;
            }
            else if (dataNumber === 3) {
                data=data3;
            }
            else if (dataNumber === 4) {
                data=data4;
            }
            else {
                data=data5;

            }
        return (
        <div style={{ height: '270px', width: '100%' }}>
        <ResponsiveBar
            data={data.bars}
            keys={['26W5473_08', '26W5487_08', '26W5479_09', '26W5675_02', '26W5434_04']}
            indexBy="date"
            margin={{ top: 10, right: 94, bottom: 40, left: 50 }}
            padding={0.25}
            colors={["#19AADE","#1DE4BD","#77f0d2","#c7f9ee","#e4fcf6"]}
            label={d => `${d.value}`}

            borderWidth={0.6}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
               /*  legend: 'Date(Mon DD, YY)',
                legendPosition: 'middle',
                legendOffset: 32 */
            }}

            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Total Expiration Date Volume',
                legendPosition: 'middle',
                legendOffset: -43
            }}
            labelSkipWidth={20}
            labelSkipHeight={12}
            labelTextColor={{ from: 'white', modifiers: [['darker', 2]] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 90,
                    translateY: 5,
                    itemsSpacing: 1.5,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.8,
                    symbolSize: 11,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            tooltip={function (tooltipdata) {

                {console.log(tooltipdata)}
                return <Card style={{ width: '14rem', borderColor: tooltipdata.color + ''}}>
                        <Card.Header style={{backgroundColor: tooltipdata.color + ''}} >{tooltipdata.id}</Card.Header>
                        <Card.Body>
                            <Card.Title>Units: {tooltipdata.value}</Card.Title>
                            <Card.Text>
                                <span>Avg. Unit Cost: {tooltipdata.index}</span><br/>
                                <span>Total Cost: {tooltipdata.indexValue}</span><br/>
                                <span>Demand Before Exp.:{tooltipdata.value}</span><br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                   
            }}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            /* enableGridY={true}
            gridYValues={[100,200,300,400,500,600]} */
        />
    </div>
        )}}
        </MyContext.Consumer>
)

export default BarChart;