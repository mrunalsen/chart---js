import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function Time() {
    const data = {
        labels: ['', 'Planned Complete', 'Actual Completion', 'Ahead', '', '', ''],
        datasets: [
            {
                label: '  Ahead',
                backgroundColor: ['#54d2f9']
            },
            {
                label: '  Behind',
                backgroundColor: ['yellow']
            },
            {
                label: '  onTime',
                data: [0, 14, 14],
                barThickness: 20,
                backgroundColor: ['#6acb6d']
            },
        ]
    };
    const options = {
        responsive: true,
        indexAxis: 'y',
        scales: {
            x: {
                max: 100,
                min: -100,
                beginAtZero: true,
                ticks: {
                    callback: function (value, index, values) {
                        return Math.abs(value); // Return the absolute value
                    },
                    stepSize: 25,
                },
                grid: {
                    color: '#3a3d4b',
                }
            },
            y: {
                border: {
                    display: false
                },
                grid: {
                    display: false,
                    drawOnChartArea: false,
                },
                ticks: {
                    crossAlign: "far",
                    font: {
                        size: 14,
                    }
                }
            }
        },
        plugins: {
            datalabels: {
                anchor: 'start',
                align: 'start',
                font: {
                    size: 18,
                },
                color: '#6bcc6d',
                formatter(value) {
                    return value + '%';
                },
            },
            legend: {
                align: 'start',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 6,
                    font: {
                        size: 14
                    },
                },
            }
        }
    };
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h4 className=' fw-normal'>Time</h4>
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