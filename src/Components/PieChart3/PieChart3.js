import { ResponsivePie } from '@nivo/pie'
import React from 'react';
import data from './data.json';
import { Card } from 'react-bootstrap';



const PieChart3 = () => (
    <ResponsivePie
        data={data.parts}
        margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
        itemHeight={250}
        itemWidth={'100%'}
        sortByValue={false}
        innerRadius={0.60}
        padAngle={0}
        fit={false}
        colors={ ["#60c49f", '#f2bb23', '#eb7f3e', '#4788fe']}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        enableRadialLabels={false}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabel={function(e){return e.cost}}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        tooltip={function (tooltipdata) {

            return <Card style={{ width: '10rem', borderColor: tooltipdata.color + ''}}>
                    <Card.Header style={{backgroundColor: tooltipdata.color + ''}} >{tooltipdata.id}</Card.Header>
                    <Card.Body>
                        <Card.Title>Quantity: {tooltipdata.label}</Card.Title>
                        <Card.Text>
                            <span>Cost : {tooltipdata.cost}</span><br/>
                        </Card.Text>
                    </Card.Body>
                </Card>
               /*  {console.log(tooltipdata.data)} */
        }}
        /* legends={[
            {
                anchor: 'right',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]} */
    />
)

export default PieChart3;
