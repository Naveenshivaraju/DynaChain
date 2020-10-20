import React from 'react';
import data from './Data.json';
import { ResponsiveBar } from '@nivo/bar';
import Card from 'react-bootstrap/Card';


const chartdata = data.data

function LagAnalysis() {
    return (
        <div style={{height:'300px',width:'100%'}}>
            <ResponsiveBar
                maxValue={14000}
                minValue={0}
                enableGridX={true}
                data={chartdata}
                keys={['LAG 7', 'LAG 6', 'LAG 5', 'LAG 4', 'LAG 3', 'LAG 2']}
                indexBy="LAG"
                margin={{ top: 50, right: 130, bottom: 50, left: 90 }}
                padding={0}
                groupMode="grouped"
                layout="horizontal"
                colors= {['#f2bb43','#967bdb', '#a5a5a5',  '#57afd8', '#8cc151','#4e7ac4']}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'AbsError',
                    legendPosition: 'middle',
                    legendOffset: 40
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Period',
                    legendPosition: 'middle',
                    legendOffset: -70
                }}
               /*  labelTextColor={'#000'} */
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 14,
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

                   /*  {console.log(tooltipdata)} */
                    return <Card style={{ width: '12rem', borderColor: tooltipdata.color + ''}}>
                            <Card.Header style={{backgroundColor: tooltipdata.color + ''}} >{tooltipdata.id}</Card.Header>
                            <Card.Body>
                                <Card.Title>Date: {tooltipdata.data.LAG}</Card.Title>
                                <Card.Text>
                                    <span>Abs Error: {tooltipdata.value.toLocaleString()}</span><br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                       
                }}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </div>
    )
}

export default LagAnalysis
