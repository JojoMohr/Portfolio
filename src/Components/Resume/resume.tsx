import React from "react";
import "./resume.css";

export default function Resume({ closePopup }) {
    return (
        <section onClick={closePopup} className="resumeWrapper">
            <img id="resumeImg" src="/img/cv.png" alt="CV" />
        </section>
    );
}
