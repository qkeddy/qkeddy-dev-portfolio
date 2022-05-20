// Questions
// 1) Why isn't the title being centered? Is there a bootstrap way to do this?
// 2) In this project, what would be a good use for the index in the map?  I see that I am getting an error. 


import React from "react";
import Card from "./Card";

// Import photos
import weatherDashboard from "../assets/images/weather-umbrella.jpeg"


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
            project: "Weather Dashboard",
            image: weatherDashboard,
            description: "HTML, Bootstrap, JavaScript",
            deployedLink: "https://qkeddy.github.io/weather-dashboard/",
            gitHubLink: "https://github.com/qkeddy/weather-dashboard",
        },
        {
            project: "Weather Dashboard",
            image: weatherDashboard,
            description: "HTML, Bootstrap, JavaScript",
            deployedLink: "https://qkeddy.github.io/weather-dashboard/",
            gitHubLink: "https://github.com/qkeddy/weather-dashboard",
        },
        {
            project: "Weather Dashboard",
            image: weatherDashboard,
            description: "HTML, Bootstrap, JavaScript",
            deployedLink: "https://qkeddy.github.io/weather-dashboard/",
            gitHubLink: "https://github.com/qkeddy/weather-dashboard",
        },
        {
            project: "Weather Dashboard",
            image: weatherDashboard,
            description: "HTML, Bootstrap, JavaScript",
            deployedLink: "https://qkeddy.github.io/weather-dashboard/",
            gitHubLink: "https://github.com/qkeddy/weather-dashboard",
        },
        {
            project: "Weather Dashboard",
            image: weatherDashboard,
            description: "HTML, Bootstrap, JavaScript",
            deployedLink: "https://qkeddy.github.io/weather-dashboard/",
            gitHubLink: "https://github.com/qkeddy/weather-dashboard",
        },
    ];

    return (
        <div>
            <h1 className="container" style={{ textAlign: "center" }}>
                Featured Projects
            </h1>

            <div className="d-flex flex-row flex-wrap justify-content-around">
                {projects.map(({ project, description, image, deployedLink, gitHubLink }, index) => (
                    <Card project={project} description={description} key={index}></Card>
                ))}
            </div>
        </div>
    );
}
