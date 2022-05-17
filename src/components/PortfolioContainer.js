import React, { useState } from "react";

// Returns the current `Nav` based upon the current state
import Nav from "./Nav";

// Enables topic pages in the `PortfolioContainer`
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";

export default function PortfolioContainer() {
    // Creates a React state and sets the default opening page if no page is selected
    const [currentPage, setCurrentPage] = useState("About");

    // `renderPage` is called in the returned JSX which passes back `currentPage` for use in `Nav`
    const renderPage = () => {
        if (currentPage === "About") {
            return <About />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
        if (currentPage === "Portfolio") {
            return <Portfolio />;
        }
        return <Resume />;
    };

    // `handlePageChange` is passed to `Nav` in the returned JSX
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* Passing in JS props variables to `Nav` for `currentPage` and making the function `handlePageChange` available to `Nav` */}
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}