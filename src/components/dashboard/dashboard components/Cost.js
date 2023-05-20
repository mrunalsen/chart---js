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
                    },
                    stepSize: 1500,
                    font: {
                        size: 14,
                    }
                },
                scaleLabel: {
                    display: true,
                    labelString: '1k = 1000'
                },
                grid: {
                    color: '#3a3d4b'
                }
            },
        },
        plugins: {
            datalabels: {
                display: false
            },
            legend: {
                align: 'start',
                labels: {
                    font: {
                        size: 14
                    },
                    padding: 15,
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 6
                }
            },
        }
    };
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h4 className=' fw-normal'>Cost</h4>
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
