import React from "react";
import "./resume.css";

export default function Resume({ closePopup }) {
    return (
        <section>
            <div onClick={closePopup} className="background"></div>
            <div className="resumeWrapper">
                <img id="resumeImg" src="/img/cv.png" alt="CV" />
                <a
                    className="anchorTag"
                    href="img/cv.pdf"
                    download="Johannes Mohr CV"
                >
                    <img
                        className="downloadIcon"
                        src="./img/download.png"
                        alt="Download CV"
                    />
                </a>
            </div>
        </section>
    );
}
