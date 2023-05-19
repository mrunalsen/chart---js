import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function Cost() {
    const data = {
        labels: [''],
        datasets: [
            {
                label: ['Actual'],
                data: [3400],
                backgroundColor: ['#6acb6d', '#54d2f9', '#4198e0'],
                barThickness: 50,
                borderWidth: 2
            },
            {
                label: ['Planned'],
                data: [4200],
                backgroundColor: ['#54d2f9'],
                barThickness: 50,
                borderWidth: 2
            },
            {
                label: ['Budget'],
                data: [6000],
                backgroundColor: ['#4198e0'],
                barThickness: 50,
                borderWidth: 2
            }

        ]
    };
    const options = {
        responsive: true,
        // indexAxis: 'y',
        scales: {
            x: {
                // stacked: true,
                borderSkipped: true,
                grid: {
                    drawOnChartArea: false,
                },
                ticks: {
                    display: false
                },
            },
            y: {
                ticks: {
                    callback: function (label, index, labels) {
                        if (label == 0) {
                            return '$' + 0;
                        } else
                            return label / 1000 + 'k';
                    }
                },
                scaleLabel: {
                    display: true,
                    labelString: '1k = 1000'
                }
            },
        },
        plugins: {
            datalabels: {
                display: false
            },
            legend: {
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 6
                }
            },
        }
    };
    return (
        <div>
            <h2>Cost</h2>
            <Bar
                data={data}
                options={options}
            ></Bar>
        </div>
    );
}
