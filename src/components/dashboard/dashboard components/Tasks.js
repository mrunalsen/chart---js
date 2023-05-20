import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function Task(props) {
    const data = {
        labels: ['Not Started', 'Complete', 'In Progress'],
        datasets: [{
            // label: 'Poll',
            data: [10, 6, 2],

            backgroundColor: ['grey', '#6acb6d', 'teal'],
            // borderColor: ['#6acb6d', 'red'],
            cutout: '85%',
            // radius: 100,
            offset: '15',
            spacing: '1',
            borderWidth: 0,
        }]
    };
    const options = {
        responsive: true,
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'end',
                font: {
                    size: 20,
                },
                padding: 16,
                color: ['grey', '#6acb6d', 'teal'],
            },
            legend: {
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 6,
                    generateLabels: (chart) => {
                        const datasets = chart.data.datasets;
                        return datasets[0].data.map((data, i) => ({
                            text: ` ${chart.data.labels[i]} (${data})`,
                            fillStyle: datasets[0].backgroundColor[i],
                            fontColor: '#a9b0b9',
                            index: i
                        }));
                    }
                }
            }
        }
    };

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h4 className=' fw-normal'>Tasks</h4>
                <div>
                    <i class="bi bi-arrows-fullscreen px-1 fs-5"></i>
                    <i class="bi bi-gear px-1 fs-5"></i>
                    <i class="bi bi-question-circle px-1 fs-5"></i>
                </div>
            </div>
            < Doughnut
                data={data}
                options={options}
            ></Doughnut>
        </div>
    );
}