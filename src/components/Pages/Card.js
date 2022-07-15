import React from "react";

export default function Card({ project, description, image, deployedLink, gitHubLink }) {
    return (
        <div className="card" style={{ width: "30rem", height: "30rem",  }}>
            {/* Use <Div */}
            <img src={image} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{project}</h5>
                <p className="card-text">{description}</p>
                <a href={deployedLink} target="_blank" className="btn btn-primary">
                    Deployment
                </a>
                <a href={gitHubLink} target="_blank" className="btn btn-primary">
                    Source Code
                </a>
            </div>
        </div>
    );
}
