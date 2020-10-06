import React from 'react';
import { Chart } from "react-google-charts";
import './CustomerBar.css';

function CustomerBar() {
    return (
        <>
            <Chart
                width={'100%'}
                height={'380px'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Customer','Sales',{ role: 'style' },{sourceColumn: 0,role: 'annotation',type: 'string',calc: 'stringify',}],
                    ['Mayville Engr. Co.​', 997388, '#7030a0', '$927k'],
                    ["O'Neal Mfg", 917567, '#8445ab', '$917K'],
                    ['BTD Mfg Inc.​', 912322, '#9859b6', '$912K'],
                    ['Ironform', 820123, '#aa6ec1', '$820K'],
                    ['United Steel, Inc.​', 820450, '#a75fc2', '$820K'],
                    ['Tenere Inc.​', 720123, '#bc83cd', '$720K'],
                    ['Standard Iron.', 620123, '#ce98d9', '$620K'],
                    ['Robinson Metal, Inc.', 520123, '#dfaee5 ', '$520K'],
                    ['Morton Industries, LLC', 420123, '#eea2f2', '$420K'],
                    ['AOC Metalworks',320123, '#ffb3ff', '$220K'],

                ]}
                options={{
                    /* title: 'Top 10 Customers (Sales)',
                    titleTextStyle: {color:'black', fontSize: 16}, */


                  /*   axes: {
                      y: {
                        0: { side: 'right' },
                      },
                    },
                    bars: 'horizontal', */

                    hAxis: {
                        title: 'Sales',
                        minValue: 0,
                        textStyle: {
                          fontSize: 12,
                          fontName: 'Roboto'
                        },
                        ticks: [0, 200000,400000,600000,800000,1000000],
                        titleTextStyle: {
                          fontSize: 14,
                          fontName: 'Roboto',
                          bold: true,
                          italic:false
                        }
                      },
                      vAxis: {
                        minValue: 0,
                        textStyle: {
                          fontSize: 12,
                          fontName: 'Roboto'
                        },
                      },
                   /*  width: 300,
                    height: 380, */
                    bar: { groupWidth: '85%' },
                    legend: {position: 'top', textStyle: {color: '#7030a0', fontSize: 12}, alignment:'end'},
                    annotations: {alwaysOutside:true},
                }}
                rootProps={{ 'data-testid': '6' }}
            />
        </>
    )
}

export default CustomerBar;
