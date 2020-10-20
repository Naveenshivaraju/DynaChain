import React from 'react';
import { Chart } from "react-google-charts";
import './BarChart2.css'

function BarChart2() {
  return (
    <>
      <Chart
        width={'100%'}
        height={'218px'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Date (Mon DD, YY)', 'Madrid, Spain', 'Munich, Germany', 'Cap Town, South Africa', 'Las Vegas, Nevada​', 'Portsmouth, Virginia'],
          ['Sep 09, 20', 3100, 4908, 1500, 3800, 2394]
        ]}
        options={{
          /* title: 'Top 5 BU Inventories MTn (By Balance)', */
          titleTextStyle: { color: 'black', fontSize: 13 },
          bar: { groupWidth: '80%' },
          colors: ['#f2bb43','#967bdb', '#a5a5a5',  '#57afd8', '#8cc151'],
          legend: {
            position: 'top',
            textStyle: {
              fontSize: 12,
              italic:false
            }
          },

          hAxis: {
            title: 'Balance',
            minValue: 0,
            textStyle: {
              fontSize: 11,
              fontName: 'Roboto'
            },
            ticks: [0, 1000, 2000, 3000, 4000, 5000],
            titleTextStyle: {
              fontSize: 12,
              fontName: 'Roboto',
              bold: true,
              italic:false
            }
          },
          vAxis: {
          /*   title: 'Date(Mon DD, YY)', */
            gridlines: { color: '#333', minSpacing: 10 },
            textStyle: {
              fontSize: 12,
              fontName: 'Roboto',
              bold: true,
              italic:false
            },
            /* titleTextStyle: {
              fontSize: 15,
              fontName: 'Roboto'
            } */

          },
           bars: 'horizontal',
           tooltip: {
             ignoreBounds:false,
           }
        }}
        rootProps={{ 'data-testid': '6' }}
      />
    </>
  )
}

export default BarChart2
