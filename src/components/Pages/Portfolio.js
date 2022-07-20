import React from "react";
import Card from "./Card";

// Import photos
import bookSearch from "../assets/images/book-search-1714-912.jpeg";
import weatherDashboard from "../assets/images/weather-umbrella-1714-912.jpeg";
import socialNetworkApi from "../assets/images/social-network-1714-912.jpeg"
import teamProfileGenerator from "../assets/images/team-profile-generator-1714-912.jpeg";
import simpleEmployeeTracker from "../assets/images/hr-tracking-1714-912.png";
import simpleNoteTaker from "../assets/images/simple-note-taker-1714-912.jpeg";
import eCommerceBackEnd from "../assets/images/ecommerce-credit-card-1714-912.jpeg";

export default function Portfolio() {
    const projects = [
        {
            project: "Google Book Search",
            image: bookSearch,
            description: "MongoDB, Node, React, GraphQL, & Apollo Server",
            deployedLink: "http://png-book-search.herokuapp.com/",
            gitHubLink: "https://github.com/qkeddy/book-search-engine",
        },
        {
            project: "Weather Dashboard",
            image: weatherDashboard,
            description: "HTML, Bootstrap, JavaScript",
            deployedLink: "https://qkeddy.github.io/weather-dashboard/",
            gitHubLink: "https://github.com/qkeddy/weather-dashboard",
        },
        {
            project: "Social Network API",
            image: socialNetworkApi,
            description: "Express.js, MongoDB & Mongoose ODM",
            deployedLink: "https://drive.google.com/file/d/1YZzEYr4MSSJRQVAPzffUspxJKzwivIOL/view?usp=sharing",
            gitHubLink: "https://github.com/qkeddy/social-network-api",
        },
        {
            project: "Team Profile Generator",
            image: teamProfileGenerator,
            description: "Node, Bootstrap, & Jest",
            deployedLink: "https://drive.google.com/file/d/1fiViaIFXr6pGfcubMPFM7vNGVjd2usjN/view",
            gitHubLink: "https://github.com/qkeddy/team-profile-generator",
        },
        {
            project: "Simple Employee Tracker",
            image: simpleEmployeeTracker,
            description: "Node, Inquirer, & MySQL",
            deployedLink: "https://drive.google.com/file/d/122Ouf5CYKBvBud7rE7niIz-aZV0YmZD1/view?usp=sharing",
            gitHubLink: "https://github.com/qkeddy/employee-tracker",
        },
        {
            project: "Simple Note Taker",
            image: simpleNoteTaker,
            description: "Node & Express.js",
            deployedLink: "https://png-note-taker.herokuapp.com/",
            gitHubLink: "https://github.com/qkeddy/note-taker",
        },
        {
            project: "E-Commerce Back End",
            image: eCommerceBackEnd,
            description: "Node, Sequelize, & MySQL",
            deployedLink: "https://drive.google.com/file/d/1iKPGEZBSAZsAVkSmambfkUsfHnoWCwen/view",
            gitHubLink: "https://github.com/qkeddy/e-commerce-back-end",
        },
    ];

    return (
        <div className="container-fluid pt-4 pb-4">
            <h1 className="container" style={{ textAlign: "center" }}>
                Featured Projects
            </h1>

            <div className="d-flex flex-row flex-wrap justify-content-around">
                {projects.map(({ project, description, image, deployedLink, gitHubLink }, index) => (
                    <Card project={project} image={image} description={description} deployedLink={deployedLink} gitHubLink={gitHubLink} key={index}></Card>
                ))}
            </div>
        </div>
    );
}
