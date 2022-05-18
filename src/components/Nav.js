import React from "react";

// Receiving `currentPage` and the `handlePageChange` as destructured components
export default function Nav({ currentPage, handlePageChange }) {
    return (
        // Referencing Bootstrap style classes
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    {/* <img src="../../public/logo192.png" alt="" width="30" height="24" className="d-inline-block align-text-top"> */}
                    <h1>Quinlan Eddy</h1>
                </a>
{/* 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                {/* <div class="collapse navbar-collapse" id="navbarNav"> */}
                    {/* <ul navbar-nav> */}
                    <ul className="nav nav-pills flex-column flex-sm-row justify-content-end">
                        <li classItem="nav-item">
                            <a href="#about" onClick={() => handlePageChange("About")} className={currentPage === "About" ? "nav-link active" : "nav-link"}>
                                About
                            </a>
                        </li>
                        <li classItem="nav-item">
                            <a href="#contact" onClick={() => handlePageChange("Contact")} className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>
                                Contact
                            </a>
                        </li>
                        <li classItem="nav-item">
                            <a href="#portfolio" onClick={() => handlePageChange("Portfolio")} className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>
                                Portfolio
                            </a>
                        </li>
                        <li classItem="nav-item">
                            <a href="#resume" onClick={() => handlePageChange("Resume")} className={currentPage === "Resume" ? "nav-link active" : "nav-link"}>
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            {/* </div> */}
        </nav>
    );
}
