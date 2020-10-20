import React from 'react'
import { ResponsiveScatterPlot } from '@nivo/scatterplot';
import data from './Data.json'

const chartdata = data.data;
console.log(chartdata);


/* const CustomSymbolShape = ({
    x, y, size, fill, borderWidth, borderColor
}) => (
    <rect
        x={x}
        y={y}
        transform={`rotate(45 ${size/2} ${size/2})`}
        fill={fill}
        strokeWidth={borderWidth}
        stroke={borderColor}
        width={size}
        height={size}
        style={{ pointerEvents: 'none' }}
    />
) */


const CustomNode = ({
    node,
    x,
    y,
    size,
    color,
    blendMode,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    onClick,
}) => {
    /* console.log(x+"  "+y) */
    if (node.data.serieId === 'B') {
        return (
            <g transform={`translate(${x},${y})`}>
                <circle
                    r={size / 2}
                    fill={color}
                    style={{ mixBlendMode: blendMode }}
                    onMouseEnter={onMouseEnter}
                    onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}
                    onClick={onClick}
                />
            </g>
        )
    }

    if (node.data.serieId === 'Forcast Stability') {
        return (
            <g transform={`translate(${x},${y}) rotate(45)`}>
                <rect
                    x={size * -0.5}
                    y={size * -0.5}
                    width={size}
                    height={size}
                    fill={color}
                    style={{ mixBlendMode: blendMode }}
                    onMouseEnter={onMouseEnter}
                    onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}
                    onClick={onClick}
                />
            </g>
        )
    }

    return (
        <g transform={`translate(${x},${y})`}>
            <rect
                x={size * -0.5}
                y={size * -0.5}
                width={size}
                height={size}
                fill={color}
                style={{ mixBlendMode: blendMode }}
                onMouseEnter={onMouseEnter}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
            />
        </g>
    )
}

function ForcastStability() {
    return (
        <div style={{height:'500px',width:'100%'}}>
        <ResponsiveScatterPlot
        nodeSize={14}
        layers={['grid', 'axes', 'markers', 'nodes', 'mesh', 'legends', 'annotations']}
        colors={["#3c76d2"]}
        markers={[
            {
                axis: 'y',
                value: 3,
                lineStyle: { stroke: '#b0413e', strokeWidth: 2 },
                legend: 'Vertical Marker',
                legendOrientation: 'vertical',
            },
            {
                axis: 'x',
                value: 3000000,
                lineStyle: { stroke: '#b0413e', strokeWidth: 2 },
                legend: 'Horizontal Marker',
            },
        ]}
        renderNode={CustomNode}
        data={chartdata}
        margin={{ top: 60, right: 140, bottom: 100, left: 90 }}
        xScale={{ type: 'linear', min: 0, max: 'auto' }}
        xFormat={function(e){return e}}
        yScale={{ type: 'linear', min: 0, max: 'auto' }}
        yFormat={function(e){return e}}
        blendMode="multiply"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Cumulative Volume',
            legendPosition: 'middle',
            legendOffset: 80,
            tickRotation: -90
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Predictability (1/COV)',
            legendPosition: 'middle',
            legendOffset: -60
        }}
        tooltip={({ node }) => (
            <div
            style={{
                background: 'white',
                padding: '9px 12px',
                border: '1px solid #ccc',
            }}
            >
                {/* {console.log(node)} */}
                <span style={{color: node.style.color+''}}>
                    {node.data.serieId}
                </span>
                <br />
                {`Volume: ${node.data.formattedX.toLocaleString('en-US'/* ,{minimumFractionDigits: 2} */)}`}
                <br />
                {`Predictability: ${node.data.formattedY.toLocaleString()}`}
            </div>
        )}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 130,
                translateY: 0,
                itemWidth: 100,
                itemHeight: 12,
                itemsSpacing: 5,
                itemDirection: 'left-to-right',
                symbolSize: 22,
                itemOpacity: 0.8,
                symbolShape: 'diamond'/* CustomSymbolShape({x:0,y:0,fill:"black",borderWidth:2,borderColor:"red"}) */,
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
    />    
</div>
    )
}

export default ForcastStability;
