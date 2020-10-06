import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Tooltip, Legend } from 'recharts';
import { Card } from 'react-bootstrap';
import './PieChart5.css';


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
  top: 130,
  left: 510,
  lineHeight: '24px',
  fontSize:'13px',
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
      <Card className="custom-tooltip" style={{ width: '12rem', border: `1px solid ${payload[0].payload.fill}` ,padding:'10px',paddingTop:'6px'}}>
        <Card.Header style={{ backgroundColor: payload[0].payload.fill + '' }} >{payload[0].payload.name}</Card.Header>
        <Card.Body>
          <Card.Title>Value: {payload[0].payload.value}</Card.Title>
          <Card.Text>
            <span>Info : {payload[0].payload.pv}</span><br />
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    );
  }

  return null;
};


let legend=false;
export default class PieChart5 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9km41z5z/';

  
  render() {
    if(this.props.legend === true)
    {
      legend = <Legend iconSize={10} width={200} height={120} layout="vertical" verticalAlign="left" wrapperStyle={style} />
    }
    return (
      <RadialBarChart
        width={800}  /* 400 800 */
        height={240}
        cx={this.props.cx} cy={this.props.cy}/* 155 114  | 300 120*/
        innerRadius={30}
        outerRadius={120}
        barSize={25}
        data={data}
        startAngle={90}
        endAngle={-360}
      >
        <RadialBar
          minAngle={15}
          label={{ position: 'insideStart', fill: 'black', offset: 2 }} 
          background clockWise={true} dataKey="value" 
          />
          {legend}
        <Tooltip content={<CustomTooltip />} />
      </RadialBarChart>
    );
  }
}