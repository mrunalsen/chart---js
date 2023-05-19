import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function Task(props) {
    const data = {
        labels: ['Not Started', 'Complete', 'In Progress'],
        datasets: [{
            label: 'Poll',
            data: [10, 6, 2],

            backgroundColor: ['grey', '#6acb6d', 'teal'],
            // borderColor: ['#6acb6d', 'red'],
            cutout: '85%',
            // radius: 100,
            offset: '15',
            spacing: '1',
            borderColor: 'transparent',
            borderAlign: 'inner'
        }]
    };
    const options = {
        responsive: true,
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'end',
                font: {
                    size: 16,
                },
                color: ['grey', '#6acb6d', 'teal'],
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
            <h2>Tasks</h2>
            < Doughnut
                data={data}
                options={options}
            ></Doughnut>
        </div>
    );
}