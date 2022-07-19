import React from "react";
import Card from "./Card";

// Import photos
import weatherDashboard from "../assets/images/weather-umbrella-1714-912.jpeg";
import teamProfileGenerator from "../assets/images/team-profile-generator-1714-912.jpeg";
import simpleEmployeeTracker from "../assets/images/hr-tracking.png";
import simpleNoteTaker from "../assets/images/simple-note-taker-1714-912.jpeg";
import eCommerceBackEnd from "../assets/images/ecommerce-credit-card-1714-912.jpeg";
// import balancedHierarchy from "../assets/images/balanced-hierarchies.jpeg";


export default function Portfolio() {
    const projects = [
        {
            project: "Weather Dashboard",
            image: weatherDashboard,
            description: "HTML, Bootstrap, JavaScript",
            deployedLink: "https://qkeddy.github.io/weather-dashboard/",
            gitHubLink: "https://github.com/qkeddy/weather-dashboard",
        },
        {
            project: "Team Profile Generator",
            image: teamProfileGenerator,
            description: "Node, Bootstrap, & Jest",
            deployedLink: "https://github.com/qkeddy/team-profile-generator",
            gitHubLink: "https://github.com/qkeddy/team-profile-generator",
        },
        {
            project: "Simple Employee Tracker",
            image: simpleEmployeeTracker,
            description: "Node, Inquirer, & MySQL",
            deployedLink: "https://github.com/qkeddy/employee-tracker",
            gitHubLink: "https://github.com/qkeddy/employee-tracker",
        },
        {
            project: "Simple Note Taker",
            image: simpleNoteTaker,
            description: "Node & Express.js",
            deployedLink: "https://github.com/qkeddy/note-taker",
            gitHubLink: "https://github.com/qkeddy/note-taker",
        },
        {
            project: "E-Commerce Back End",
            image: eCommerceBackEnd,
            description: "Node, Sequelize, & MySQL",
            deployedLink: "https://github.com/qkeddy/e-commerce-back-end",
            gitHubLink: "https://github.com/qkeddy/e-commerce-back-end",
        },
        // {
        //     project: "Balanced Hierarchy",
        //     image: balancedHierarchy,
        //     description: "Patent",
        //     deployedLink: "https://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=7571182.PN.&OS=PN/7571182&RS=PN/7571182",
        //     gitHubLink: "https://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=7571182.PN.&OS=PN/7571182&RS=PN/7571182",
        // },
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
