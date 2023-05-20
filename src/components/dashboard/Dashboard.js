import React from 'react';
import Health from './dashboard components/Health';
import Task from './dashboard components/Tasks';
import Progress from './dashboard components/Progress';
import Time from './dashboard components/Time';
import Cost from './dashboard components/Cost';
import Workload from './dashboard components/Workload';
import {
    Chart as ChartJs,
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

ChartJs.register(
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    ChartDataLabels,
    Tooltip,
    Legend
);


export default function Dashboard(props) {
    const { mode } = props;
    return (
        <div className={`${props.mode === 'light' ? 'bg-white' : 'dashboard'} row g-0 overflow-auto h-100`}>
            <div className='col-12 col-lg-6 col-xxl-4 border border-opacity-25 border-info p-4'>
                <Health />
            </div>
            <div className='col-12 col-lg-6 col-xxl-4 border border-opacity-25 border-info p-4'>
                <Task />
            </div>
            <div className='col-12 col-lg-6 col-xxl-4 border border-opacity-25 border-info p-4'>
                <Progress />
            </div>
            <div className='col-12 col-lg-6 col-xxl-4 border border-opacity-25 border-info p-4'>
                <Time />
            </div>
            <div className='col-12 col-lg-6 col-xxl-4 border border-opacity-25 border-info p-4'>
                <Cost />
            </div>
            <div className='col-12 col-lg-6 col-xxl-4 border border-opacity-25 border-info p-4'>
                <Workload />
            </div>
        </div>
    );
}