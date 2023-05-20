import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function Progress() {
    const data = {
        labels: ['Contracts', 'Design', 'Procurement', 'Construction', 'Post Construction', 'Project Closed'],
        datasets: [
            {
                label: '',
                data: [100, 80, 19, 0, 0, 0],
                backgroundColor: ['#6acb6d', '#6acb6d', '#e0599e',],
                padding: 20,
                barThickness: 30,
                borderWidth: 5
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
                    font: {
                        size: 14,
                    }
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
                align: 'start',
                formatter(value) {
                    return value + ' %';
                },
            },
            legend: {
                display: false,
            }
        }
    };
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h4 className=' fw-normal'>Progress</h4>
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