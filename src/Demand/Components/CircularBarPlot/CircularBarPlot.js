import React, { useRef, useEffect, useState } from 'react';
import { select } from 'd3';
import * as d3 from 'd3'




function CircularBarPlot() {

    const chartdata = [
                        { 'Country': 'USA', 'Value': 12534 },
                        { 'Country': 'Russia', 'Value': 9148 },
                        { 'Country': 'China', 'Value': 8954 },
                        { 'Country': 'UAE', 'Value': 7848 },
                        { 'Country': 'Germany', 'Value': 5615 },
                        { 'Country': 'Canada', 'Value': 3500 },
                        { 'Country': 'Soviet Union', 'Value': 2476 },
                        { 'Country': 'Netherlands', 'Value': 1900 },
                        { 'Country': 'Italy', 'Value': 1720 },
                        { 'Country': 'Israel', 'Value': 1360 },
                        { 'Country': 'Ukraine', 'Value': 1115 },
                        { 'Country': 'North Korea', 'Value': 1000 },
                        { 'Country': 'Brazil', 'Value': 800 },
                        { 'Country': 'Belgium', 'Value': 600 },
                        { 'Country': 'Poland', 'Value': 300 }
                        
    ];

    const [data, setData] = useState(chartdata);
    const svgRef = useRef();
    const width = 400;
    const height = 400;
    const margin = { top: 50, right: 0, bottom: 50, left: 410 };
    const innerRadius = 90;
    const outerRadius = Math.min(width, height) / 2;


    useEffect(() => {
        const svg = select(svgRef.current)
            .attr("width", '100%')
            .attr("height", '500')
            .attr("display", 'block')
            .attr("margin", 'auto')
            .append("g")
            .attr("transform", "translate(" + (width / 2 + margin.left) + "," + (height / 2 + margin.top) + ")");;

        const xScale = d3.scaleBand()
            .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
            .align(0)                  // This does nothing
            .domain(data.map((data) => { console.log("Country name : " + data.Country); return data.Country }));

        const yScale = d3.scaleRadial()
            .range([innerRadius, outerRadius])   // Domain will be define later.
            .domain([0, 14000]); // Domain of Y is from 0 to the max seen in the data

        console.log("data : " + data)

        // Add the bars
        svg.append("g")
            .selectAll("path")
            .data(data)
            .join("g")
            .append("path")
            .attr("fill", "#69b3a2")
            .attr("d", d3.arc()     // imagine your doing a part of a donut plot
                .innerRadius(innerRadius)
                .outerRadius(function (d) { return yScale(d['Value']); })
                .startAngle(function (d) { return xScale(d.Country); })
                .endAngle(function (d) { return xScale(d.Country) + xScale.bandwidth(); })
                .padAngle(0.01)
                .padRadius(innerRadius))


        svg.append("g")
            .selectAll("g")
            .data(data)
            .join("g")
            .append("g")
            .attr("text-anchor", function (d) { return (xScale(d.Country) + xScale.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "end" : "start"; })
            .attr("transform", function (d) { return "rotate(" + ((xScale(d.Country) + xScale.bandwidth() / 2) * 180 / Math.PI - 90) + ")" + "translate(" + (yScale(d['Value']) + 10) + ",0)"; })
            .append("text")
            .text(function (d) { return (d.Country) })
            .attr("transform", function (d) { return (xScale(d.Country) + xScale.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "rotate(180)" : "rotate(0)"; })
            .style("font-size", "11px")
            .attr("alignment-baseline", "middle")

    }, data);




    return (
        <div style={{ height: '500px', width: '100%'}}>
            <svg ref={svgRef}></svg>
        </div>
    )
}

export default CircularBarPlot;




/* svg
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr('r', value => value)
    .attr('cx', value => value * 2)
    .attr('cy', value => value * 2)
    .attr('stroke', "yellow") */





