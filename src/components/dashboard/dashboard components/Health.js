import React from 'react';

export default function Health() {
    return (
        <>
            <div className='d-flex justify-content-between'>
                <h4 className='fw-normal'>Health</h4>
                <div>
                    <i class="bi bi-question-circle fs-5"></i>
                </div>
            </div>
            <table className='w-100'>
                <tbody>
                    <tr className='border-info border-bottom border-opacity-25'>
                        <td>Time</td>
                        <td className='text-muted'>14% ahead of schedule.</td>
                    </tr>
                    <tr className='border-info border-bottom border-opacity-25'>
                        <td>Tasks</td>
                        <td className='text-muted'>12 tasks o be complete.</td>
                    </tr>
                    <tr className='border-info border-bottom border-opacity-25'>
                        <td>Workload</td>
                        <td className='text-muted'>0 tasks overdue.</td>
                    </tr>
                    <tr className='border-info border-bottom border-opacity-25'>
                        <td>Progress</td>
                        <td className='text-muted'>14% complete.</td>
                    </tr>
                    <tr>
                        <td>Cost</td>
                        <td className='text-muted'>42% under</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}