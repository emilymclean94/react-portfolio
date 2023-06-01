import React, { useState } from 'react';
import Home from './pages/homepage/Home';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/projects'
import Resume from './pages/resume/Resume';
import Header from './Header';
import AboutMe from './pages/aboutMe/AboutMe';
import Footer from './Footer';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        return <Contact />;

    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <container>
        <main className='vh-100 d-flex flex-column'>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </main>
        
        </container>
    );
};