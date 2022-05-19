import React, { useState } from "react";

// Import a helper function that will check if the email is valid
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
    // Create state variables for the fields in the form and set initial values to an empty string
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [emptyNameMessage, setEmptyNameMessage] = useState("");
    const [emptyEmailMessage, setEmptyEmailMessage] = useState("");
    const [emptyMessageMessage, setEmptyMessageMessage] = useState("");

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, set the state of either name, email, or message
        if (inputType === "email") {
            setEmail(inputValue);
        } else if (inputType === "name") {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // Check to see if the email is not valid or if the name is empty. If so, set an error message to be displayed on the page.
        if (!validateEmail(email)) {
            setErrorMessage("Email is invalid");
            // Exit out of this code block if something is wrong so that the user can correct it
            return;
        }

        // If everything goes according to plan, clear out the input after a successful registration.
        setName("");
        setMessage("");
        setEmail("");
        setErrorMessage("");
    };

    // Notify user that the field cannot be empty
    const resetFieldAlert = (e) => {
        if (name.length < 1 && e.target.name === "name") {
            setEmptyNameMessage("Field must not be empty");
        }
        if (name.length < 1 && e.target.name === "email") {
            setEmptyEmailMessage("Field must not be empty");
        }
        if (name.length < 1 && e.target.name === "message") {
            setEmptyMessageMessage("Field must not be empty");
        }
    };

    // Reset field alerts
    const emptyFieldAlert = (e) => {
        if (e.target.name === "name") {
            setEmptyNameMessage("");
        }
        if (e.target.name === "email") {
            setEmptyEmailMessage("");
        }
        if (e.target.name === "message") {
            setEmptyMessageMessage("");
        }
    };

    return (
        <div className="container pt-4 pb-4">
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input className="form-control" type="text" onBlur={resetFieldAlert} onClick={emptyFieldAlert} placeholder="" value={name} name="name" onChange={handleInputChange} style={{ flex: 1, marginRight: 10 }} />
                        {emptyNameMessage && <div style={{ flex: 1 }}>Field must not be empty</div>}
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input className="form-control" type="text" onBlur={resetFieldAlert} onClick={emptyFieldAlert} placeholder="" value={email} name="email" onChange={handleInputChange} style={{ flex: 1, marginRight: 10 }} />
                        {emptyEmailMessage && <div style={{ flex: 1 }}>Field must not be empty</div>}
                    </div>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <textarea className="form-control" type="text" rows="7" onBlur={resetFieldAlert} onClick={emptyFieldAlert} placeholder="" value={message} name="message" onChange={handleInputChange} style={{ flex: 1, marginRight: 10 }} />
                        {emptyMessageMessage && <div style={{ flex: 1 }}>Field must not be empty</div>}
                    </div>
                </div>
            </form>

            <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>
                Submit
            </button>
        </div>
    );
}
