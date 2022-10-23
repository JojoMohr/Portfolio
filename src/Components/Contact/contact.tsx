import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
const keys = require("../../secrets.json");

export default function Contact({ closePopup }) {
    const form = useRef();

    const sendEmail = (e): void => {
        e.preventDefault();

        emailjs
            .sendForm(
                keys.MY_SERVICE_ID,
                keys.MY_TEMPLATE_ID,
                form.current,
                keys.MY_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                    e.target.reset();
                    console.log("MESSAGE SENT");
                },
                (error) => {
                    console.log(error.text);

                    console.log("MESSAGE FAILED TO SENT");
                }
            );
    };
    return (
        <div className="contactWrapper">
            <img
                onClick={closePopup}
                id="closeProjects"
                src="img/closeIcon.png"
                alt="Close"
            />
            <h1 className="contactHeading">CONTACT ME</h1>
            {/* <div id="trenner"></div> */}
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input
                    id="sendButton"
                    type="submit"
                    value="LIFT OF"
                />
            </form>
        </div>
    );
}
