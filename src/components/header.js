import React from 'react';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <nav className="border border-primary d-flex flex-wrap navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Emily McLean</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="border border-secondary flex-wrap justify-content-end collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a
                            href="#about"
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link-active' : 'nav-link'}
                        >
                            About Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#Portfolio"
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link-active' : 'nav-link'}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#Contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link-active' : "nav-link"}
                        >Contact</a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#Resume"
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link-active' : "nav-link"}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

