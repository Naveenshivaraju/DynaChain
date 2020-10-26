import React, { Component } from "react";
import Chart from "react-apexcharts";

class AdjustedDemand extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                /* {
                    name: 'Volume',
                    type: 'column',
                    data: [15000, 0, 80000, 45000, 60000, 50000, 35000, 55000, 62000, 48000, 38000, 46000, null, null, null, null, null, null, null, null, null, null, null, null]
                }, */
                {
                    name: 'Actuals',
                    type: 'line',
                    data: [800, 1290, 1500, 1000, 1240, 1450, 1500, 1300, 1600, 1570, 1850, 1208, null, null, null, null, null, null, null, null, null, null, null, null ]
                },
                {
                    name: "Promoted",
                    type: "column",
                    data: [1200, 5000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null]
                },
                {
                    name: 'Forcast',
                    type: 'line',
                    data: [null, null, null, null, null, null, null, null, null, null, null, 1208, 800, 1290, 1500, 1000, 1240, 1450, 1500, 1300, 1600, 1570, 1850, 1208]
                },
                {
                    name: 'Upper Bound',
                    type: 'line',
                    data: [null, null, null, null, null, null, null, null, null, null, null, 1208, 900, 1490, 1550, 1200, 1240, 1480, 1580, 1390, 1700, 1600, 1750, 1308]
                },
                {
                    name: 'Lower Bound',
                    type: 'line',
                    data: [null, null, null, null, null, null, null, null, null, null, null, 1208, 750, 1210, 1400, 800, 1140, 1350, 1450, 1250, 1460, 1500, 1800, 1108]
                },
                /* {
                    name: "Whether",
                    type: "column",
                    data: [-300, -500, -100, 0, 0, -400, 0, 0, 0, -100, -800, -300, null, null, null, null, null, null, null, null, null, null, null, null]
                }, */
            ],


            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    stacked: false,
                    width:'100%'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [4, 4, 4, 1, 1, 4],
                    curve: ["smooth",null,"straight","smooth","smooth", null]
                },
                title: {
                    text: 'Adjusted Demand (2014 Jan - 2014 Dec)',
                    align: 'center',
                    offsetX: 0,
                    offsetY: 0
                },
                colors: [
                    "#4a8ffb",
                    "#6fe397",
                    "#f0af18",
                    "#e7405e",
                    "#775dcf",
                  ],
                markers: {
                    size: [4, null, 4, 3, 3, null],
                    hover: {
                        size: 6,
                      }
                },
                annotations: {
                    xaxis: [
                      {
                        x: "2015 Jan",
                        strokeDashArray: 0,
                        strokeWidth:4,
                        borderColor: '#b0413e',
                        label: {
                          style: {
                            color: '#fff',
                            background: '#b0413e',
                            align: 'left',
                          },
                          text: 'Present Date'
                        }
                      }
                    ]
                  },

                xaxis: {
                    categories: ["2014 Jan", "2014 Feb", "2014 Mar", "2014 Apr", "2014 May", "2014 Jun", "2014 Jul", "2014 Aug", "2014 Sep", "2014 Oct", "2014 Nov", "2014 Dec",
                    "2015 Jan", "2015 Feb", "2015 Mar", "2015 Apr", "2015 May", "2015 Jun", "2015 Jul", "2015 Aug", "2015 Sep", "2015 Oct", "2015 Nov", "2015 Dec"],
                    labels: {
                        show: true,
                        rotate: -45,
                        rotateAlways: false,
                        hideOverlappingLabels: true,
                        showDuplicates: false,
                        trim: false,
                        minHeight: undefined,
                        maxHeight: 120,
                        style: {
                            colors: [],
                            fontSize: '12px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            cssClass: 'apexcharts-xaxis-label',
                        }
                    },
                    tooltip: {
                        enabled: false
                    }
                },
                yaxis: [
                    {
                        seriesName: 'Actuals',
                        /* min: -1000,
                        max: 6000, */
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#5e6564'
                        },
                        labels: {
                            style: {
                                colors: '#5e6564',
                            },
                            formatter: (value) => { 
                                if(value === null)
                                    return undefined;
                                else if (value === undefined)
                                    return undefined;
                                else
                                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
                            },
                        },
                        title: {
                            text: "Volume",
                            style: {
                                color: '#5e6564'
                            }
                        },
                        tooltip: {
                            enabled: false
                        }
                    },
                    {
                        seriesName: 'Promoted',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#00E396'
                        },
                        labels: {
                            style: {
                                colors: '#00E396',
                            },
                            formatter: (value) => { 
                                if(value === null)
                                    return undefined;
                                else if (value === undefined)
                                    return value;
                                else
                                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
                            },
                        },
                        title: {
                            text: "Promoted",
                            style: {
                                color: '#00E396',
                            }
                        },
                    },
                    /* {
                        seriesName: 'Actuals',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#FEB019'
                        },
                        labels: {
                            style: {
                                colors: '#FEB019',
                            },
                            formatter: (value) => { 
                                if(value === null)
                                    return 0;
                                else if (value === undefined)
                                    return value;
                                else
                                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
                            },
                        },
                        title: {
                            text: "Actuals",
                            style: {
                                color: '#FEB019',
                            }
                        },
                    }, */
                    /* {
                        seriesName: 'Forcast',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#e7405e'
                        },
                        labels: {
                            style: {
                                colors: '#e7405e',
                            },
                            formatter: (value) => { 
                                if(value === null)
                                return 0;
                                else if (value === undefined)
                                return value;
                                else
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
                            },
                        },
                        title: {
                            text: "Forcast",
                            style: {
                                color: '#e7405e',
                            }
                        },
                    }, */
                ],
                tooltip: {
                    x: {
                        show: true,
                        format: 'dd MMM',
                        formatter: undefined,
                    },
                    y: {
                        formatter: undefined,
                        title: {
                            formatter: (seriesName) => seriesName,
                        },
                    },
                    z: {
                        formatter: undefined,
                        title: 'Size: '
                    },
                    fixed: {
                        enabled: false,
                        position: 'topRight', // topRight, topLeft, bottomRight, bottomLeft
                        offsetY: 30,
                        offsetX: 60
                    },
                },
                legend: {
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            },


        };
    }

    render() {
        return (
            <div className="AdjustedDemand">
                <div className="row">
                    <div className="mixed-chart" style={{width:'100%'}}>
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="line"
                            width="100%"
                            height="500px"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default AdjustedDemand;