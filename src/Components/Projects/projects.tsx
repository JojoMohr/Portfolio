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
                <div className="sliderWrapper">
                    <Carousel className="sliderWrapper" responsive={responsive}>
                        {/* ===== SOSO ====== */}
                        <div
                            data-aos="fade-right"
                            id="soundsound"
                            className="projectContainer"
                        >
                            <div className="assetsWrapper">
                                <div className="projectVideoWrapper">
                                    <img
                                        src="img/gifs/soso.gif"
                                        alt="SOSO"
                                    ></img>
                                </div>
                                <div className="projectInfoWrapper">
                                    <div className="projectInfo">
                                        <h2 className="projectName">
                                            SOUNDSOUND.NET
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor invidunt
                                            ut labore et dolore magna aliquyam
                                            erat, sed diam voluptua. At vero eos
                                            et accusam et justo duo dolores et
                                            ea rebum. Stet clita kasd gubergren,
                                            no sea takimata sanctus est Lorem
                                            ipsum dolor sit amet.
                                        </p>
                                    </div>
                                    <div className="techStack">
                                        {/* <h3>TECH STACK</h3> */}
                                        <img
                                            src="img/techStack/contentful.svg"
                                            alt="Contentful"
                                            title="Contentful"
                                        />
                                        <img
                                            src="img/techStack/react.svg"
                                            alt="ReactJS"
                                            title="ReactJS"
                                        />
                                        <img
                                            src="img/techStack/netlify.svg"
                                            alt="Netlify"
                                            title="Netlify"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ===== ZOME ====== */}
                        <div
                            data-aos="fade-right"
                            id="zoneWrapper"
                            className="projectContainer"
                        >
                            <div id="zoneImg" className="projectVideoWrapper">
                                <img src="img/gifs/zone.gif" alt="ZONE"></img>
                            </div>
                            <div className="projectInfoWrapper">
                                <div className="projectInfo">
                                    <h2 className="projectName">ZONE</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur
                                        sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua.
                                        At vero eos et accusam et justo duo
                                        dolores et ea rebum. Stet clita kasd
                                        gubergren, no sea takimata sanctus est
                                        Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <div className="techStack">
                                    {/* <h3>TECH STACK</h3> */}
                                    <img
                                        src="img/techStack/contentful.svg"
                                        alt="Contentful"
                                        title="Contentful"
                                    />
                                    <img
                                        src="img/techStack/react.svg"
                                        alt="ReactJS"
                                        title="ReactJS"
                                    />
                                    <img
                                        src="img/techStack/netlify.svg"
                                        alt="Netlify"
                                        title="Netlify"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ===== PROJECT 3 ====== */}

                        <div
                            data-aos="fade-right"
                            id="connect4"
                            className="projectContainer"
                        >
                            <div className="projectVideoWrapper">
                                <img
                                    src="img/gifs/connect4.gif"
                                    alt="ZONE"
                                ></img>
                            </div>
                            <div className="projectInfoWrapper">
                                <div className="projectInfo">
                                    <h2 className="projectName">CONNECT 4</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur
                                        sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua.
                                        At vero eos et accusam et justo duo
                                        dolores et ea rebum. Stet clita kasd
                                        gubergren, no sea takimata sanctus est
                                        Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <div className="techStack">
                                    {/* <h3>TECH STACK</h3> */}
                                    <img
                                        src="img/techStack/contentful.svg"
                                        alt="Contentful"
                                        title="Contentful"
                                    />
                                    <img
                                        src="img/techStack/react.svg"
                                        alt="ReactJS"
                                        title="ReactJS"
                                    />
                                    <img
                                        src="img/techStack/netlify.svg"
                                        alt="Netlify"
                                        title="Netlify"
                                    />
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
