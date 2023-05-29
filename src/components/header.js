import React from 'react';
import Navigation from './Navigation';

export default function Header() {
    return (
        <header className='headerStyle'>
        <nav className="border border-primary d-flex flex-wrap navbar navbar-expand-lg">
            <a id='navbar-name' className="navbar-brand p-2" href="/">Emily McLean</a>
            <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="light navbar-toggler-icon"></span>
            </button>
            <Navigation />
        </nav>
        </header>
    );
}

