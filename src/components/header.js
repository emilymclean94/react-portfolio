import React from 'react';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <nav className="d-flex flex-wrap navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Emily McLean</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="flex-wrap justify-content-end collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="#">About Me</a>
                    <a className="nav-item nav-link" href="#">Portfolio</a>
                    <a className="nav-item nav-link" href="#">Contact</a>
                    <a className="nav-item nav-link" href="#">Resume</a>
                </div>
            </div>
        </nav>
    );
}