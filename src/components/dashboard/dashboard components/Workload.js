import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function Stackedchart() {
    const data = {
        labels: ['Mike', 'Jennifer', 'Brandon', 'Sam', 'George'],
        datasets: [
            //     {
            //     label: ['Completed', 'Remaining', 'Overdue'],
            //     data: [3, 6, 9],
            //     backgroundColor: 'aqua',
            //     borderColor: 'black'
            // }
            {
                label: 'Completed',
                data: [4, 2,],
                backgroundColor: ['#6acb6d']
            },
            {
                label: 'Remaining',
                data: [0, 2, 1, 3, 1],
                backgroundColor: ['#54d2f9']
            },
            {
                label: 'Overdue',
                data: [],
                backgroundColor: ['Red']
            },
        ]
    };
    const options = {
        responsive: true,
        indexAxis: 'y',
        scales: {
            x: {
                stacked: true,
                max: 8,
                ticks: {
                    callback: function (value) {
                        if (value % 2 === 0) {
                            return value.toString();
                        }
                        return ''; // Return an empty string for odd values
                    },
                    stepSize: 2
                }
            },
            y: {
                stacked: true,
                grid: {
                    drawOnChartArea: false,
                },
            }
        },
        plugins: {
            datalabels: {
                display: false,
            },
            legend: {
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 6
                }
            }
        }
    };
    return (
        <div>
            <h2>Workload</h2>
            <Bar
                data={data}
                options={options}
            ></Bar>
        </div>
    );
}