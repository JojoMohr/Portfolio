import { AnyCnameRecord } from "dns";
import React from "react";
import "./resume.css";

export default function Resume({ closePopup }: any) {
    return (
        <section>
            <div
                // data-aos="zoom-in"
                // data-aos-duration="500"
                // data-aos-easing="ease-in-sine"
                onClick={closePopup}
                className="background"
            >
                <div className="resumeWrapper">
                    <img id="resumeImg" src="/img/cv.jpg" alt="CV" />
                    <a
                        className="anchorTag"
                        href="img/cv.jpg"
                        download="Johannes Mohr CV"
                    >
                        <img
                            className="downloadIcon"
                            src="./img/download.png"
                            alt="Download CV"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
