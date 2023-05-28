import React, { useState} from 'react';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio'
import Resume from './pages/resume/Resume';
import Header from './Header';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        return <Contact />;
        
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <main className=''>
        <Header currentPage={currentPage} handlePageChange={handlePageChange}/>

        {renderPage()}
        </main>
    );
};