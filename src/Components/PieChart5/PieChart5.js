import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Tooltip } from 'recharts';
import { Card } from 'react-bootstrap';


const data = [
  {
    name: 'Sheet ingots​', value: 42, pv: 2400, fill: '#60c39f',
  },
  {
    name: 'Extrusion ingots', value: 28, pv: 4567, fill: '#f2bb23',
  },
  {
    name: 'Wire rod', value: 36, pv: 1398, fill: '#eb7f3e',
  },
  {
    name: 'Primary foundry alloys', value: 21, pv: 9800, fill: '#4788fe',
  }
];

const style = {
  top: 0,
  left: 150,
  lineHeight: '30px',
};


/* const getIntroOfPage = (label) => {
  if (label === 'Sheet ingots​') {
    return "Sheet ingots information.";
  } if (label === 'Wire rod') {
    return "Wire rod information.";
  } if (label === 'Primary foundry alloys') {
    return 'Prmary foundry alloys information.';
  } if (label === 'Extrusion ingots') {
    return 'Extrusion information.';
  }
}; */

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (

      <div style={{marginTop:'100px'}}>
      <Card className="custom-tooltip" style={{ width: '12rem', border: `1px solid ${payload[0].payload.fill}` ,padding:'12px',paddingTop:'8px'}}>
        <Card.Header style={{ backgroundColor: payload[0].payload.fill + '' }} >{payload[0].payload.name}</Card.Header>
        <Card.Body>
          <Card.Title>Value: {payload[0].payload.value}</Card.Title>
          <Card.Text>
            <span>Info : {payload[0].payload.pv}</span><br />
          </Card.Text>
        </Card.Body>
      </Card>
      </div>







      /*   <div className="custom-tooltip" style={{backgroundColor:'white', color:'red'}}>
          {console.log(payload)}
          <p className="label">{`${payload[0].payload.name}`}</p>
          <p >{getIntroOfPage(payload[0].payload.name)}</p>
        </div>
 */
    );
  }

  return null;
};


export default class PieChart5 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9km41z5z/';

  render() {
    return (
      <RadialBarChart
        width={400}
        height={232}
        cx={150} cy={114}
        innerRadius={30}
        outerRadius={120}
        barSize={30}
        data={data}
        startAngle={90}
        endAngle={-360}
      >
        <RadialBar
          minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise={true} dataKey="value" />
        <Tooltip content={<CustomTooltip />} />
      </RadialBarChart>
    );
  }
}