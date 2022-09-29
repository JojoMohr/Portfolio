import React from "react";
import "./projects.css";
// import Zoom from "react-reveal/Zoom";
// import Slide from "react-reveal/Slide";
// import { AnimationOnScroll } from "react-animation-on-scroll";
// import ReactSlidy from "react-slidy";
import "react-slidy/lib/styles.css";

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

export default function Projects({ clickOnProjects }) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div className="pageSection" id="projects">
            {/* <h1 className="heading">Projects</h1> */}
            <div className="projectsWrapper">
                <div id="closeProjects" onClick={clickOnProjects}></div>
                {/* <div className="sliderWrapper"> */}
                <Carousel className="sliderWrapper" responsive={responsive}>
                    <div
                        data-aos="fade-right"
                        id="soundsound"
                        className="projectContainer"
                    >
                        <div className="projectVideoWrapper">
                            <img src="img/planetSkills.png" alt="SOSO"></img>
                        </div>
                        <div className="projectInfoWrapper">
                            <div className="projectInfo">
                                <h2 className="projectName">PROJECT 3</h2>
                                <p className="projectInfo">
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea
                                    rebum. Stet clita kasd gubergren, no sea
                                    takimata sanctus est Lorem ipsum dolor sit
                                    amet.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ===== ZOME ====== */}
                    {/* <div
                        data-aos="fade-right"
                        id="zone"
                        className="projectContainer"
                    >
                        <img src="img/planetContact.png" alt="projectImg"></img>

                        {/* <h2 className="projectName">PROJECT 2</h2> */}
                    {/* </div>  */}
                    {/* ===== PROJECT 3 ====== */}

                    {/* <div
                        data-aos="fade-right"
                        id="zone"
                        className="projectContainer"
                    >
                        <img src="img/planetResume.png" alt="projectImg"></img>

                        {/* <h2 className="projectName">PROJECT 3</h2> 
                    </div> */}
                </Carousel>
                ;{/* </div> */}
            </div>
        </div>
    );
}
