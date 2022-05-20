import React from "react";

export default function Resume() {
    return (
        <div className="container pt-4 pb-4">
            <h4>Eduction</h4>
            {/* <p>
                <strong>Professional Certificate, Computer Science</strong>
            </p>
            <p>University of Pennsylvania May 2022</p>
            <p>
                <strong>Bachelor Of Science, Business Administration</strong>
            </p>
            <p>University of Vermont May 1993</p> */}

            <ul>
                <li>
                    <strong>Professional Certificate, Computer Science</strong>
                    <br></br>University of Pennsylvania May 2022
                </li>
                <br></br>

                <li>
                    <strong>Bachelor Of Science, Business Administration</strong>
                    <br></br>University of Vermont May 1993
                </li>
            </ul>

            <h4>Technology Experience</h4>
            {/* TODO Change to logos */}
            <ul>
                <li>Enterprise Cloud technologies & architecture</li>
                <li>On-premises and cloud integration and automation</li>
                <li>Database architecture, performance management, analytics, and reporting technologies</li>
                <li>Multidimensional and database technologies including Oracle Essbase, Oracle Hyperion EPM, Anaplan, IBM TM1, SQL and NoSQL (Mongo) databases</li>
                <li>Integration Platform as a Service (iPaaS) technologies</li>
            </ul>
            <h4>Full Stack Engineering</h4>
            {/* TODO Change to logos */}
            <ul>
                <li>Dynamic & reactive web development (HTML, CSS, JavaScript, TypeScript, & React.js)</li>
                <li>Data driven computing (jQuery, RESTful APIs, Sequelize ,GraphQL, JSON)</li>
                <li>Backend development (Node.js, express.js, MySQL, NoSQL MongoDB)</li>
                <li>Scripting (Python, Linux bash/shell, Windows CLI)</li>
                <li>Progressive Web Applications (Asynchronous & distributed computing)</li>
                <li>General Computer Science (data structures, algorithms, Big-O notation, reliability engineering, efficient resource management)</li>
            </ul>

            <a href="#" target="_blank" className="btn btn-primary">
                Full Resume
            </a>
        </div>
    );
}
