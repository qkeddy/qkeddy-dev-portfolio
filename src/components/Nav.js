import React from "react";

// Receiving `currentPage` and the `handlePageChange` as destructured components
export default function Nav({ currentPage, handlePageChange }) {
    return (
        // Referencing Bootstrap style classes
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    {/* <img src="../../public/logo192.png" alt="" width="30" height="24" class="d-inline-block align-text-top"> */}
                    <h1>Quinlan Eddy</h1>
                </a>
                <ul className="nav nav-pills flex-column flex-sm-row justify-content-end">
                    <li>
                        <a href="#about" onClick={() => handlePageChange("About")} className={currentPage === "About" ? "nav-link active" : "nav-link"}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => handlePageChange("Contact")} className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>
                            Contact
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
                </ul>
            </div>
        </nav>
    );
}
