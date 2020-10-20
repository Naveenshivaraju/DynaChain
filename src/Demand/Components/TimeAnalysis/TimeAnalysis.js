import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import data from './Data.json';

const chartdata = data.data

const styleById = {
    "Actuals": {
        /* strokeDasharray: '12, 6', */
        strokeWidth: 4,
    },
    "Forcast": {
        /* strokeDasharray: '1, 16', */
        strokeWidth: 4,
      /*   strokeLinejoin: 'round',
        strokeLinecap: 'round', */
    },
    "Bias": {
        strokeWidth: 4,
    },
    "Linear Trend": {
        strokeWidth: 1,
        strokeDasharray: '4, 4',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
    },
    default: {
        strokeWidth: 4,
    },
}


function TimeAnalysis() {
    
    const DashedLine = ({ series, lineGenerator, xScale, yScale }) => {
        return series.map(({ id, data, color }) => (
            <path
                key={id}
                d={lineGenerator(
                    data.map(d => ({
                        x: xScale(d.data.x),
                        y: yScale(d.data.y),
                    }))
                )}
                fill="none"
                stroke={color}
                style={styleById[id] || styleById.default}
            />
        ))
    }
    
    return (
        <div style={{height:'500px', width:'100%'}}>
    <ResponsiveLine
       
        data={chartdata}
        margin={{ top: 50, right: 110, bottom: 120, left: 100 }}
        xScale={{  type: 'point', min: 0, max: 'auto', stacked: false, reverse: false  }}
        yScale={{ type: 'linear', min: 0, max: 'auto', stacked: false, reverse: false }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -90,
           /*  legend: 'transportation', */
            legendOffset: 100,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Vertical Label 1',
            legendOffset: -70,
            legendPosition: 'middle'
        }}
        axisRight={{
            orient: 'right',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Vertical Label 2',
            legendOffset: 60,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        colors={["#4e7ac4","#ea7d30","black","#b3b3b3"]}
        enablePoints={false}
        pointSize={6}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={false}
        enableCrosshair={true}
        crosshairType="x"
        enableSlices="x"
        sliceTooltip={({ slice }) => {
          /*   console.log(slice) */
            return (
                <div
                    style={{
                        background: 'white',
                        padding: '9px 12px',
                        border: '1px solid #ccc',
                    }}
                >
                    <div /* style={{backgroundColor:"#ccc"} }  */> Date: {slice.points[0].data.x}</div>
                    {slice.points.map(point => (
                        <div
                            key={point.id}
                            style={{
                                color: point.serieColor,
                                padding: '3px 0',
                            }}
                        >
                            <span>{point.serieId} </span>: {point.data.yFormatted.toLocaleString()}
                        </div>
                    ))}
                </div>
            )
        }}
        layers={['grid', 'markers', 'areas', 'crosshair' , DashedLine, 'slices', 'points', 'axes',  'mesh', 'legends']}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 102,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 105,
                itemHeight: 20,
                itemOpacity: 0.8,
                symbolSize: 12,
                symbolShape: 'square',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
        </div>
    )
}

export default TimeAnalysis
