import React from 'react';

export default function Header(props) {
    const { mode } = props;
    return (
        <nav className={`${props.mode === 'light' ? 'bg-white' : 'dashboard'} header container-fluid d-flex align-items-center`}>
            <a className="navbar-brand fs-3" href="/">{props.brand}</a>
            <ul className="d-flex justify-content-center w-100">
                <li className='p-3 fs-5'>
                    <i className="bi bi-list-ul"></i>
                </li>
                <li className='p-3 fs-5'>
                    <i className="bi bi-bar-chart-fill"></i>
                </li>
                <li className='p-3 fs-5'>
                    <i className="bi bi-file-text"></i>
                </li>
                <li className='p-3 fs-5'>
                    <i className="bi bi-activity"></i>
                </li>
                <li className='p-3 fs-5'>
                    <i className="bi bi-file-earmark-minus"></i>
                </li>
                <li className='p-3 fs-5'>
                    <i className="bi bi-calendar"></i>
                </li>
            </ul>
        </nav>
    );
}