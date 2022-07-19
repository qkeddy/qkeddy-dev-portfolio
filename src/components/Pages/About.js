import React, { useState, useEffect } from "react";

export default function About() {
    return (
        <div className="container  pb-4" style={{ lineHeight: 2, border: "1px solid black" }}>
            <div className="row">
                <div className="col-lg-7 pt-4 pt-lg-0">
                    <img src="https://avatars.githubusercontent.com/u/9737814" className="img-thumbnail" alt="Quinlan Eddy profile picture" width="150" style={{ float: "left", marginRight: "20px" }}></img>
                    <p>
                        Strategic and tactical problem-solver with expertise in technical design, development, and deployment of enterprise software. Committed and focused communicator with demonstrated success in building and introducing new
                        technologies while conceptualizing improvements for interoperability with incumbent platforms. Thrive in entrepreneurial environments where meeting deadlines, creativity, and teamwork are essential. Strong product management
                        and development leadership experience combined with full-stack software engineering (MERNG) and functional programmatic application integration (Java & Python).
                    </p>
                </div>
            </div>
        </div>
    );
}
