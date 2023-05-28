import React, { useState} from 'react';
import About from './pages/about/About';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
        <About currentPage={currentPage} handlePageChange={handlePageChange}/>

        {renderPage()}
        </div>
    );
};