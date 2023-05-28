import React from 'react';

export default function Header() {
    return (
        <nav className="border border-primary d-flex flex-wrap navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Emily McLean</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Navigation />
        </nav>
    );
}

