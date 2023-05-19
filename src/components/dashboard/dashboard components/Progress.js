import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function Progress() {
    const data = {
        labels: ['Contracts', 'Design', 'Procurement', 'Construction', 'Post Construction', 'Project Closed'],
        datasets: [
            {
                label: '',
                data: [100, 80, 19, 0, 0, 0],
                backgroundColor: ['green', 'green', 'red',]
            },
        ]
    };
    const options = {
        responsive: true,
        legend: {
            display: false
        },
        indexAxis: 'y',
        scales: {
            x: {
                max: 100,
                display: false,
                grid: {
                    drawOnChartArea: false,
                },
            },
            y: {
                border: {
                    display: false
                },
                ticks: {
                    padding: 20,
                    crossAlign: "far",
                },
                grid: {
                    display: false,
                    drawOnChartArea: false,
                },
            }
        },
        plugins: {
            datalabels: {
                position: 'left',
                anchor: 'start',
                align: 'start'
            },
            legend: {
                display: false,
            }
        }
    };
    return (
        <div>
            <h2>Progress</h2>
            <Bar
                data={data}
                options={options}
            ></Bar>
        </div>
    );
}