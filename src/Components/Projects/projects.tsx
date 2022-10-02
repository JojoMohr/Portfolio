import React from "react";
import "./projects.css";
// import Zoom from "react-reveal/Zoom";
// import Slide from "react-reveal/Slide";
// import { AnimationOnScroll } from "react-animation-on-scroll";
// import ReactSlidy from "react-slidy";
import "react-slidy/lib/styles.css";

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import ContentfulIcon from "../TechStackIcons/contentfulIcon";
import ReactJs from "../TechStackIcons/reactIcon";
import Netlify from "../TechStackIcons/netlifyIcon";
import ReactIcon from "../TechStackIcons/reactIcon";
import NetlifyIcon from "../TechStackIcons/netlifyIcon";
import GitIcon from "../TechStackIcons/gitIcon";
import DockerIcon from "../TechStackIcons/dockerIcon";
import CssIcon from "../TechStackIcons/cssIcon";
import HandlebarsIcon from "../TechStackIcons/handlebarsIcon";
import JqueryIcon from "../TechStackIcons/jqueryIcon";
import HtmlIcon from "../TechStackIcons/htmlIcon";
import NodejsIcon from "../TechStackIcons/nodejsIcon";
import PostgresIcon from "../TechStackIcons/postgressqlIcon";
import ReduxIcon from "../TechStackIcons/reduxIcon";
import SocketioIcon from "../TechStackIcons/socketioIcon";
import TypescriptIcon from "../TechStackIcons/typescriptIcon";
import VueIcon from "../TechStackIcons/vueIcon";
import JavaScriptIcon from "../TechStackIcons/javascriptIcon";

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
                {/* <div id="closeProjects" onClick={clickOnProjects}> */}
                <img
                    onClick={clickOnProjects}
                    id="closeProjects"
                    src="img/closeIcon.png"
                    alt=""
                />
                {/* </div> */}
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
                                            erat, sed diam voluptua.
                                        </p>
                                    </div>
                                    <div className="techStack">
                                        {/* <h3>TECH STACK</h3> */}
                                        <ReactIcon></ReactIcon>
                                        <GitIcon></GitIcon>
                                        <NodejsIcon></NodejsIcon>
                                        <JavaScriptIcon></JavaScriptIcon>
                                        <HtmlIcon></HtmlIcon>
                                        <CssIcon></CssIcon>
                                        <ContentfulIcon></ContentfulIcon>
                                        <NetlifyIcon></NetlifyIcon>
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
                                    </p>
                                </div>
                                <div className="techStack">
                                    {/* <h3>TECH STACK</h3> */}
                                    <JavaScriptIcon></JavaScriptIcon>
                                    <HtmlIcon></HtmlIcon>
                                    <CssIcon></CssIcon>
                                </div>
                            </div>
                        </div>
                        {/* ===== IMAGEBOARD ====== */}
                        <div
                            data-aos="fade-right"
                            id="imageBoard"
                            className="projectContainer"
                        >
                            <div className="projectVideoWrapper">
                                <img
                                    src="img/gifs/imageboard.gif"
                                    alt="ImageBoard"
                                ></img>
                            </div>
                            <div className="projectInfoWrapper">
                                <div className="projectInfo">
                                    <h2 className="projectName">Image Board</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur
                                        sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua.
                                    </p>
                                </div>
                                <div className="techStack">
                                    <VueIcon></VueIcon>
                                    <NodejsIcon></NodejsIcon>
                                    <PostgresIcon></PostgresIcon>
                                    <JavaScriptIcon></JavaScriptIcon>
                                    <HtmlIcon></HtmlIcon>
                                    <CssIcon></CssIcon>
                                </div>
                            </div>
                        </div>
                        {/* ===== CONNECT 4====== */}
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
                                    </p>
                                </div>
                                <div className="techStack">
                                    {/* <h3>TECH STACK</h3> */}
                                    <JavaScriptIcon></JavaScriptIcon>
                                    <HtmlIcon></HtmlIcon>
                                    <CssIcon></CssIcon>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
