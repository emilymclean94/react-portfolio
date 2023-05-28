import React, { useState} from 'react';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Projects from './pages/projectPage/projects';
import Resume from './pages/resume/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Resume');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        return <Contact />;
        
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
        <About currentPage={currentPage} handlePageChange={handlePageChange}/>

        {renderPage()}
        </div>
    );
};