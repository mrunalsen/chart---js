import React from 'react';

export default function Health() {
    return (
        <div>
            <h2>Health</h2>
            <div className='d-flex bg-black'>
                <ul className='list-group list-group-flush col-3'>
                    <li className='list-group-item'>
                        <p className='me-4'>Time</p>
                    </li>
                    <li className='list-group-item'>
                        <p className='me-4'>Tasks</p>
                    </li>
                    <li className='list-group-item'>
                        <p className='me-4'>Workload</p>
                    </li>
                    <li className='list-group-item'>
                        <p className='me-4'>Progress</p>
                    </li>
                    <li className='list-group-item'>
                        <p className='me-4'>Cost</p>
                    </li>
                </ul>
                <ul className='list-group list-group-flush col-9'>
                    <li className='list-group-item'>
                        <p>14% ahead of schedule.</p>
                    </li>
                    <li className='list-group-item'>
                        <p>12 tasks to be completed.</p>
                    </li>
                    <li className='list-group-item'>
                        <p>0 tasks overdue.</p>
                    </li>
                    <li className='list-group-item'>
                        <p>14% complete.</p>
                    </li>
                    <li className='list-group-item'>
                        <p>42% under budget.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}