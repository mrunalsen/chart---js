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
                backgroundColor: ['#f25149']
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
                },
                grid: {
                    color: '#3a3d4b',
                }
            },
            y: {
                stacked: true,
                grid: {
                    drawOnChartArea: false,
                },
                ticks: {
                    font: {
                        size: 14,
                    }
                }
            }
        },
        plugins: {
            datalabels: {
                display: false,
            },
            legend: {
                align: 'start',
                padding: 15,
                labels: {
                    font: {
                        size: 14
                    },
                    padding: 15,
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 6
                }
            }
        }
    };
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h4 className=' fw-normal'>Workload</h4>
                <div>
                    <i class="bi bi-arrows-fullscreen px-1 fs-5"></i>
                    <i class="bi bi-gear px-1 fs-5"></i>
                    <i class="bi bi-question-circle px-1 fs-5"></i>
                </div>
            </div>
            <Bar
                data={data}
                options={options}
            ></Bar>
        </div>
    );
}