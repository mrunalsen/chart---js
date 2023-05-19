import React, { useEffect } from 'react';

export default function Sidebar(props) {
    const { mode, toggle } = props;
    useEffect(() => {
        if (mode === 'dark') {
            document.getElementById('darkMode').checked = true;
        }
    }, [mode]);

    return (
        <div className={`sidebar bg-${props.mode === 'light' ? 'white' : 'black'}`}>
            {/* Start : Brand */}
            <section className='header p-2 border-bottom'>
                <i className="bi bi-strava fs-1"></i>
            </section>
            {/* End : Brand */}
            {/* Start : Home */}
            <section className='overflow-auto'>
                <ul className="navbar-nav trial me-auto mb-2 mb-lg-0 border-bottom">
                    <li className="nav-item py-2">
                        <a className="nav-link active" aria-current="page" href="#">
                            <i className="bi bi-house-door"></i>
                        </a>
                    </li>
                    <li className="nav-item py-2">
                        <a className="nav-link" href="#">
                            <i className="bi bi-clock"></i>
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav trial me-auto mb-2 mb-lg-0">
                    <li className="nav-item py-2">
                        <a className="nav-link" href="#">
                            <i className="bi bi-people"></i>
                        </a>
                    </li>
                    <li className="nav-item py-2">
                        <a className="nav-link" href="#">
                            <i className="bi bi-bag-dash"></i>
                        </a>
                    </li>
                </ul>
            </section>
            {/* End : Home */}
            {/* Start : Profile */}
            <section className='mt-auto'>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item py-2">
                        <a className="nav-link" href="#">
                            <i className="bi bi-plus"></i>
                        </a>
                    </li>
                    <li className="nav-item py-2">
                        <a className="nav-link" href="#">
                            <i className="bi bi-question-circle"></i>
                        </a>
                    </li>
                    <li className="nav-item py-2">
                        <a className="nav-link" href="#">
                            <i className="bi bi-person-circle"></i>
                        </a>
                    </li>
                </ul>
                <div className="nav-item py-2 form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="darkMode" onClick={props.toggle} />
                    <label className="form-check-label" htmlFor="darkMode"></label>
                </div>
            </section>
            {/* End : Profile */}
        </div>
    );
}