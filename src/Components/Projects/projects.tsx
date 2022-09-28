import React from "react";
import "./projects.css";
// import Zoom from "react-reveal/Zoom";
// import Slide from "react-reveal/Slide";
// import { AnimationOnScroll } from "react-animation-on-scroll";
import ReactSlidy from "react-slidy";
import "react-slidy/lib/styles.css";

export default function Projects({ clickOnProjects }) {
    return (
        <div className="pageSection" id="projects">
            {/* <h1 className="heading">Projects</h1> */}
            <div className="projectsWrapper">
                <div id="closeProjects" onClick={clickOnProjects}></div>
                <ReactSlidy keyboardNavigation numOfSlides={2}>
                    <div
                        data-aos="fade-right"
                        id="soundsound"
                        className="projectContainer"
                    >
                        <img src="img/logoWhite.png" alt="projectImg"></img>
                        <div className="projectInfo">
                            <h2 className="projectName">SOUND SOUND</h2>
                            <p className="projectInfo"></p>
                        </div>
                    </div>
                    <div
                        data-aos="fade-right"
                        id="zone"
                        className="projectContainer"
                    >
                        <img src="img/logoWhite.png" alt="projectImg"></img>

                        <h2 className="projectName">ZONE</h2>
                    </div>
                    <div
                        data-aos="fade-right"
                        id="zone"
                        className="projectContainer"
                    >
                        <img src="img/logoWhite.png" alt="projectImg"></img>

                        <h2 className="projectName">ZONE</h2>
                    </div>
                </ReactSlidy>
            </div>
        </div>
    );
}
