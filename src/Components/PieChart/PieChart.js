import { ResponsivePie } from '@nivo/pie'
import React from 'react';
import data from './data.json';
import { Card } from 'react-bootstrap';




const PieChart = (props) => {
    let legend = [];
    if(props.legend === true) {
        legend = [
            {
                anchor: 'right',
                direction: 'column',
                translateY: 55,
                translateX: -30,
                itemWidth: 130,
                itemHeight: 22,
                itemTextColor: '#999',
                symbolSize: 13,
                symbolShape: 'square',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]
    }
    
    return (
    <div style={{ height: '240px', width: '100%' }}>
    <ResponsivePie
        data={data.parts}
        margin={{ top: 10, right: 0, bottom: 15, left: 0 }}
        itemHeight={240}
        itemWidth={'100%'}
        sortByValue={false}
        innerRadius={0.55}
        padAngle={3}
        fit={true}
        colors={['#f2bb43','#967bdb', '#a5a5a5',  '#57afd8', '#8cc151']}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        enableRadialLabels={props.enableRadialLabels}
        radialLabel={function(e){return e.id}}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabel={function(e){return e.labelValue}}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        tooltip={function (tooltipdata) {

            return <Card style={{ width: '10rem', borderColor: tooltipdata.color + ''}}>
                    <Card.Header style={{backgroundColor: tooltipdata.color + ''}} >{tooltipdata.id}</Card.Header>
                    <Card.Body>
                        <Card.Title>Units: {tooltipdata.value}</Card.Title>
                        <Card.Text>
                            <span>Pct (%): {tooltipdata.labelValue}</span><br/>
                        </Card.Text>
                    </Card.Body>
                </Card>
               /*  {console.log(tooltipdata.data)} */
        }}
        legends={legend}
    />
</div>
)}

export default PieChart;
