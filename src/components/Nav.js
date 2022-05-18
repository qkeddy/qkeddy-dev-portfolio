import React from "react";

// Receiving `currentPage` and the `handlePageChange` as destructured components
export default function Nav({ currentPage, handlePageChange }) {
    return (
        // Referencing Bootstrap style classes
        <nav className="navbar navbar-expand-lg bg-dark">
            {/* <div className="container-fluid justify-content-around"> */}
            <div className="w-100">
                {/* <ul className="nav nav-pills flex-column flex-sm-row"> */}
                <ul className="nav nav-pills d-flex justify-content-around flex-column flex-sm-row">
                    <li>
                        <a href="#about" onClick={() => handlePageChange("About")} className={currentPage === "About" ? "nav-link active" : "nav-link"}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" onClick={() => handlePageChange("Portfolio")} className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#resume" onClick={() => handlePageChange("Resume")} className={currentPage === "Resume" ? "nav-link active" : "nav-link"}>
                            Resume
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => handlePageChange("Contact")} className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

