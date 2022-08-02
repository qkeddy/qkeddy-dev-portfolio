import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCaptchaV2 from "react-google-recaptcha";

// Import a helper function that will check if the email is valid
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
    // State variable that is a destructured object to correspond to the fields in the form and have the initial values set to an empty string
    const [{ fullName, email, message, token }, setUserInput] = useState({
        fullName: "",
        email: "",
        message: "",
        token: "",
    });

    // Additional state variables
    const [invalidEmailMessage, setInvalidEmailMessage] = useState("");
    const [emptyNameMessage, setEmptyNameMessage] = useState("");
    const [emptyEmailMessage, setEmptyEmailMessage] = useState("");
    const [emptyNoteMessage, setEmptyNoteMessage] = useState("");

    //
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change. `name` is set in the JSX.
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // console.log(target.value);

        // Setter method for the user input state. First insert the current value of `userInput` and then dynamically add & set a new key:value pair based upon the `inputType`
        setUserInput({
            fullName,
            email,
            message,
            [inputType]: inputValue,
        });
    };

    // Set the template parameters and dynamically set the token in the email template required by https://www.emailjs.com/docs/rest-api/send/
    const templateParams = (token) => {
        return {
            fullName,
            email,
            message,
            "g-recaptcha-response": token,
        };
    };

    // Handle the submit
    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // Check to see if the email is not valid or if the name is empty. If so, set an error message to be displayed on the page.
        if (!validateEmail(email)) {
            setInvalidEmailMessage("Please enter a valid email address");
            // Exit out of this code block if something is wrong so that the user can correct it
            return;
        }

        // TODO update with process.env
        emailjs.send("service_cp1gu7r", "contact_form", templateParams(token), "2vOlRnW65FzpCZ_Bg").then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
            },
            (err) => {
                console.log("FAILED...", err);
            }
        );

        // Clear out the input after a successful registration.
        setUserInput({
            fullName: "",
            email: "",
            message: "",
        });

        setInvalidEmailMessage("");
    };

    // Notify user that the field cannot be empty
    const checkForEmptyField = (e) => {
        if (fullName.length < 1 && e.target.name === "fullName") {
            displayMessage("Please let me know who you are :-)", "fullName");
        }
        if (email.length < 1 && e.target.name === "email") {
            displayMessage("A valid email would be great!", "email");
        }
        if (message.length < 1 && e.target.name === "message") {
            displayMessage("What would you like to chat about?", "message");
        }
    };

    // Display friendly prompts for 3 seconds and then clear the conditional render
    // TODO - Remove timer and convert to a redbox and always display a message
    const displayMessage = (message, field) => {
        if (field === "fullName") {
            setEmptyNameMessage(message);
            setTimeout(() => setEmptyNameMessage(""), 3000);
        } else if (field === "email") {
            setEmptyEmailMessage(message);
            setTimeout(() => setEmptyEmailMessage(""), 3000);
        } else {
            setEmptyNoteMessage(message);
            setTimeout(() => setEmptyNoteMessage(""), 3000);
        }
    };

    // TODO - document with credit to https://github.com/KaemonIsland/recaptcha-example/blob/main/src/FormEnd.jsx
    const handleToken = (token) => {
        setUserInput((currentForm) => {
            console.log(`reCAPTCHA token: ${token}`);
            console.log(currentForm);
            return { ...currentForm, token };
        });
    };

    // TODO - document with credit to https://github.com/KaemonIsland/recaptcha-example/blob/main/src/FormEnd.jsx
    const handleExpire = () => {
        setUserInput((currentForm) => {
            console.log(`reCAPTCHA token cleared`);
            return { ...currentForm, token: null };
        });
    };

    return (
        <div className="container pt-4 pb-4">
            <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Lets get in touch!</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input className="form-control" type="text" onBlur={checkForEmptyField} placeholder="" value={fullName} name="fullName" onChange={handleInputChange} style={{ flex: 1, marginRight: 10 }} />
                        {emptyNameMessage && <div style={{ flex: 1 }}>{emptyNameMessage}</div>}
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input className="form-control" type="text" onBlur={checkForEmptyField} placeholder="" value={email} name="email" onChange={handleInputChange} style={{ flex: 1, marginRight: 10 }} />
                        {emptyEmailMessage && <div style={{ flex: 1 }}>{emptyEmailMessage}</div>}
                    </div>
                </div>
                {invalidEmailMessage && (
                    <div>
                        <p className="error-text">{invalidEmailMessage}</p>
                    </div>
                )}
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <textarea className="form-control" type="text" rows="7" onBlur={checkForEmptyField} placeholder="" value={message} name="message" onChange={handleInputChange} style={{ flex: 1, marginRight: 10 }} />
                        {emptyNoteMessage && <div style={{ flex: 1 }}>{emptyNoteMessage}</div>}
                    </div>
                </div>
            </form>

            {/* TODO update with process.env */}
            {/* <ReCaptchaV2 sitekey={process.env.REACT_APP_SITE_KEY} /> */}
            <ReCaptchaV2
                sitekey={"6LeMgy0hAAAAACpTIGf0iPI1vC74sVURdbtQHZCX"}
                onChange={handleToken}
                onExpired={handleExpire}
            />
            <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>
                Submit
            </button>
        </div>
    );
}
