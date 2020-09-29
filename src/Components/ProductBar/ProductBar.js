import React from 'react';
import { Chart } from "react-google-charts";
import './ProductBar.css'

function ProductBar() {
    return (
        <>
            <Chart
                width={'100%'}
                height={'450px'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Element','Sales',{ role: 'style' },{sourceColumn: 0,role: 'annotation',type: 'string',calc: 'stringify',}],
                    ['26W5310_055', 997388, '#4e8ad9', '$927K'],
                    ['26W5473_608', 917567, '#469ae2', '$917K'],
                    ['26W5310_464', 912322, '#44a9e9', '$912K'],
                    ['26W5310_465', 820123, '#4ab8ee', '$820K'],
                    ['26W5473_608', 820450, '#56c6f2', '$820K'],
                    ['26W5473_609', 720123, '#67d4f5', '$720K'],
                    ['26W5473_610', 620123, '#7be1f8', '$620K'],
                    ['26W5310_464', 520123, '#90eefb', '$520K'],
                    ['26W5310_465', 420123, '#a7fbff', '$420K'],
                    ['26W5310_466', 320123, '#cbfdfe', '$220K']
                ]}

                options={{

                    hAxis: {
                        title: 'Sales',
                        minValue: 0,
                        textStyle: {
                          fontSize: 12,
                          fontName: 'Roboto'
                        },
                        ticks: [0, 200000, 400000, 600000, 800000, 1000000,],
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
                          fontSize: 10,
                          fontName: 'Roboto'
                        },
                      },
                    width: 360,
                    height: 450,
                    bar: { groupWidth: '80%' },
                    legend: {position: 'top', textStyle: {color: '#4e8ad9', fontSize: 12}},
                    annotations: {alwaysOutside:true},
                }}

                rootProps={{ 'data-testid': '6' }}
            />
        </>
    )
}

export default ProductBar
