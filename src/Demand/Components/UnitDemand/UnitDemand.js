import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import data from './Data.json'
/* import Moment from 'moment'; */

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
    "Upper Bound": {
        strokeWidth: 1,
    },
    "Lower Bound": {
        strokeWidth: 1,
       /*  strokeDasharray: '4, 4',
        strokeLinecap: 'round',
        strokeLinejoin: 'round' */
    },
    default: {
        strokeWidth: 4,
    },
}


const UnitDemand = () => {

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
        <div style={{ height: '500px', width: '100%'}}>
            <ResponsiveLine
                
                markers={[
                   /*  {
                        axis: 'y',
                        value: 10,
                        lineStyle: { stroke: '#b0413e', strokeWidth: 2 },
                        legend: 'y marker',
                        legendOrientation: 'vertical',
                    }, */
                    {
                        axis: 'x',
                        value: "03-Mar-2018",
                        lineStyle: { stroke: '#b0413e', strokeWidth: 1 },
                        legend: 'Present Date',
                    },
                ]}
                data={chartdata}
                margin={{ top: 50, right: 110, bottom: 100, left: 100 }}
                xScale={{ type: 'point', min: 0, max: 'auto', stacked: false, reverse: false  }}
                yScale={{ type: 'linear', min: 0, max: 200000, stacked: false, reverse: false }}
                curve="monotoneX"
                lineWidth={2}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    /* legend: 'transportation', */
                    legendOffset: 36,
                    legendPosition: 'middle',
                    tickRotation: -90
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Volume',
                    legendOffset: -70,
                    legendPosition: 'middle'
                }}
                enableGridX={false}
                colors={["#4e7ac4","red","#1e306a","green"]}
                enablePoints={true}
                pointSize={4}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={1}
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
                            <div>Date: {slice.points[0].data.x}</div>
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

export default UnitDemand;
