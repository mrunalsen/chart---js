import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function Time() {
    const data = {
        labels: ['Planned Complete', 'Actual Completion', 'Ahead', '', '', ''],
        datasets: [
            {
                label: 'Ahead',
                data: [0],
                backgroundColor: ['#54d2f9']
            },
            {
                label: 'Behind',
                data: [0],
                backgroundColor: ['yellow']
            },
            {
                label: 'onTime',
                data: [0, 14, 14],
                backgroundColor: ['green']
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
                ticks: {
                    callback: function (value, index, values) {
                        return Math.abs(value); // Return the absolute value
                    },
                    stepSize: 25,
                },
            },
            y: {
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
            <h2>Time</h2>
            <Bar
                data={data}
                options={options}
            ></Bar>
        </div>
    );
}