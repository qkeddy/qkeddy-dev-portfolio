// Import React JavaScript Library
import React from "react";

// Import React DOM-specific methods
import ReactDOM from "react-dom";

// TODO Document
import App from "./app";

// Import minimized Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// ReactDOM.render takes a React component, or tree of React components and (eventually) renders them to the DOM.
// The first argument is the component we want to render (<App/>), and second is the target element to render to (#root)
ReactDOM.render(<App />, document.getElementById("root"));
