import React from "react";
import "./projects.css";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
// import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Projects() {
    return (
        <>
            <h1 className="heading">Projects</h1>
            <div className="projectsWrapper">
                <div data-aos="fade-right" className="zone">
                    SOUND SOUND
                </div>
                <div data-aos="fade-right" className="zone">
                    ZONE
                </div>
            </div>
        </>
    );
}
