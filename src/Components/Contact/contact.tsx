import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
const keys = require("../../secrets.json");
// require("dotenv").config();

export default function Contact({ closePopup }: any) {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: any): void => {
        e.preventDefault();

        emailjs
            .sendForm(
                keys.REACT_APP_SERVICE_ID,
                keys.REACT_APP_TEMPLATE_ID,
                form.current!,
                keys.REACT_APP_PUBLIC_KEY
            )
            .then(
                (result: { text: any }) => {
                    console.log(result.text);
                    e.target.reset();
                    alert("MESSAGE SENT");
                },
                (error: { text: any }) => {
                    console.log(error.text);

                    alert("MESSAGE FAILED TO SENT");
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
                <input type="text" name="from_name" />
                {/* <label>Subject</label>
                <input type="text" name="subject" /> */}
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input id="sendButton" type="submit" value="LIFT OF" />
            </form>
        </div>
    );
}
