import React, { useState, useEffect } from "react";

export default function About() {
    return (
        <div className="container  pb-4" style={{ lineHeight: 2, border:"1px solid black" }}>
            <div className="row">
                <div className="col-lg-7 pt-4 pt-lg-0">
                    <img src="https://avatars.githubusercontent.com/u/9737814" className="img-thumbnail" alt="Quinlan Eddy profile picture" width="150" style={{float: "left", marginRight: "20px"}}></img>
                    <p>
                        Strategic and tactical problem-solver with expertise in technical design, deployment, and maintenance of enterprise software. Committed and focused communicator with demonstrated success in building and introducing new
                        technologies while conceptualizing improvements for interoperability of various systems. Thrive in entrepreneurial environments where meeting deadlines, creativity, and teamwork are essential. A graduate from UPenn Full-stack
                        Coding Bootcamp with engineering skills in JavaScript, CSS, React.js, responsive web design, and the full MERN stack.
                    </p>
                </div>
            </div>
        </div>
    );
}
