import React from 'react';
import { ResponsiveSankey } from '@nivo/sankey';
import data from './data.json';
import { Card } from 'react-bootstrap';

const sankeydata = data.data;

function SankeyChart() {
    return (
        <div style={{height:'400px',width:'100%'}}>
            <ResponsiveSankey 
                isInteractive={true}
                linkContract={1}
                data={sankeydata}
                margin={{ top: 40, right: 150, bottom: 40, left: 100 }}
                align="justify"
                sort="descending"
                colors={{ scheme: 'category10' }}
                nodeOpacity={1}
                nodeThickness={18}
                nodeInnerPadding={3}
                nodeSpacing={24}
                nodeBorderWidth={0}
                nodeBorderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
                linkOpacity={0.5}
                linkHoverOthersOpacity={0.1}
                enableLinkGradient={true}
                labelPosition="outside"
                labelOrientation="horizontal"
                labelPadding={16}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1]] }}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        translateX: 130,
                        itemWidth: 100,
                        itemHeight: 14,
                        itemDirection: 'right-to-left',
                        itemsSpacing: 2,
                        itemTextColor: '#999',
                        symbolSize: 14,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
                nodeTooltip={node => { 
                                    console.log("Node Info")
                                    console.log(node)
                                    return (
                                            <Card className="tooltip-card" /*  style={{top:'100px'}} */>
                                                <Card.Header style={{backgroundColor:node.color, opacity:'0.8'}}>{node.id}</Card.Header>
                                                <Card.Body>
                                                    <Card.Title></Card.Title>
                                                    <Card.Text>
                                                        <span>Prod Name: {node.prod_name}</span><br/>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                    )
                                }
                            }
                linkTooltip={link => {
                                    console.log("Link Info")
                                    console.log(link)
                                    let circle_color="";
                                    if(link.delay < 0)
                                    circle_color="yellow"
                                    else if(link.delay >= 0 && link.delay <= 5)
                                    circle_color="green";
                                    else if(link.delay >= 6 && link.delay <= 9)
                                    circle_color="orange"
                                    else
                                    circle_color="red";

                                    return (
                                            <Card className="tooltip-card">
                                                <Card.Header style={{backgroundColor:link.color, opacity:'0.8'}}>{link.source.prod_name}</Card.Header>
                                                <Card.Body>
                                                    <Card.Title>{link.source.id} {' -> '} {link.target.id}</Card.Title>
                                                    <Card.Text>
                                                        <span> Weighted Adherence: {(link.value/100).toFixed(3)}</span><br/>
                                                        <span> GAP: {link.gap.toLocaleString()}</span>{/* <br/> */}
                                                        {/* <span> Plan Date: {link.plan_date}</span><br/>
                                                        <span> Actual Date: {link.actual_date}</span><br/>
                                                        <span> Delay: {link.delay} days</span> */}
                                                        <svg height="35" width="35">
                                                        <circle cx="22" cy="17" r="9" stroke="black" strokeWidth="1" fill={circle_color} />
                                                        </svg>
                                                        <br/>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                    )
                                }
                }
            />
        </div>
    )
}

export default SankeyChart
