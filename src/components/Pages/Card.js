import React from "react";

export default function Card({ project, description, image, deployedLink, gitHubLink }) {
    return (
        <div className="card" style={{ width: "30rem" }}>
            <div className="card-body">
                <h5 className="card-title">{project}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
    );
}
