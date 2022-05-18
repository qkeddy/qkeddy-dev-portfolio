import React, { useState } from "react";


// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from "../../utils/helpers";

export default function Contact() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either name, email, or message
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

        // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email)) {
            setErrorMessage("Email is invalid");
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
            // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        }

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName("");
        setMessage("");
        setEmail("");
    };

    return (
        <div>
            <container>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input value={name} name="name" onChange={handleInputChange} type="text" placeholder="name" />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input value={email} name="email" onChange={handleInputChange} type="email" placeholder="email" />
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <input value={message} name="message" onChange={handleInputChange} type="text" placeholder="message" />
                    </div>

                    <button type="button" onClick={handleFormSubmit}>
                        Submit
                    </button>
                </form>
            </container>

            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}
