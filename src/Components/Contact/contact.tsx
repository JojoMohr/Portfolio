import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import toast, { Toaster } from "react-hot-toast";
// const keys = require("../../secrets.json");
require("dotenv").config();

export default function Contact({ closePopup }: any) {
    const form = useRef<HTMLFormElement>(null);
    const serviceId: any = process.env.REACT_APP_SERVICE_ID;
    const templateId: any = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey: any = process.env.REACT_APP_PUBLIC_KEY;

    const sendEmail = (e: any): void => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current!, publicKey).then(
            (result: { text: any }) => {
                console.log(result.text);
                e.target.reset();
                // toast.success("Message Sent");
                toast("Message Sent", {
                    icon: "🚀",
                });
                // alert("MESSAGE SENT");
            },
            (error: { text: any }) => {
                console.log(error.text);
                toast.error("Error sending Mail");

                // alert("MESSAGE FAILED TO SENT");
            }
        );
    };
    return (
        <div className="contactWrapper">
            {/* <Toaster></Toaster> */}
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
                <input required type="name" name="from_name" />
                {/* <label>Subject</label>
                <input type="text" name="subject" /> */}
                <label>Email</label>
                <input required type="email" name="user_email" />
                <label>Message</label>
                <textarea required name="message" />
                <input id="sendButton" type="submit" value="LIFT OF" />
            </form>
        </div>
    );
}
