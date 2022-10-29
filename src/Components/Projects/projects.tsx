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
import Netlify from "../TechStackIcons/netlifyIcon";
import ReactIcon from "../TechStackIcons/reactIcon";
import DockerIcon from "../TechStackIcons/dockerIcon";
import NetlifyIcon from "../TechStackIcons/netlifyIcon";
import GitIcon from "../TechStackIcons/gitIcon";
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

export default function Projects({ closePopup, clickOnProjects }: any) {
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
        <section className="pageSection" id="projects">
            {/* <h1 className="heading">Projects</h1> */}
            <div className="projectsWrapper">
                <img
                    onClick={closePopup}
                    id="closeProjects"
                    src="img/closeIcon.png"
                    alt="Close"
                />
                <div className="sliderWrapper">
                    <Carousel className="sliderWrapper" responsive={responsive}>
                        {/* ===== SOSO ====== */}
                        <div
                            data-aos="fade-right"
                            id="soundsound"
                            className="projectContainer"
                        >
                            {/* <div className="githubProjectWrapper"> */}
                            <a
                                href="https://github.com/JojoMohr/soundsound"
                                target={"_blank"}
                                rel="noreferrer"
                                className="githubProjectWrapper"
                            >
                                <img src="img/github.png" alt="github" />
                            </a>
                            {/* </div> */}

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
                            <a
                                href="https://github.com/JojoMohr/zone"
                                target={"_blank"}
                                rel="noreferrer"
                                className="githubProjectWrapper"
                            >
                                <img src="img/github.png" alt="github" />
                            </a>
                            <div id="zoneImg" className="projectVideoWrapper">
                                <img
                                    src="https://user-images.githubusercontent.com/99038739/193660049-ac2554dd-303f-42ce-b92d-432c3102e104.gif"
                                    alt="ZONE"
                                ></img>
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
                            <a
                                href="https://github.com/JojoMohr/imageboard"
                                target={"_blank"}
                                rel="noreferrer"
                                className="githubProjectWrapper"
                            >
                                <img src="img/github.png" alt="github" />
                            </a>
                            <div className="projectVideoWrapper">
                                <img
                                    src="img//gifs/imageboard.gif"
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
                        {/* ===== SOCIAL NETWORK ====== */}
                        <div
                            data-aos="fade-right"
                            id="imageBoard"
                            className="projectContainer"
                        >
                            <a
                                href="https://github.com/JojoMohr/Social-Network"
                                target={"_blank"}
                                rel="noreferrer"
                                className="githubProjectWrapper"
                            >
                                <img src="img/github.png" alt="github" />
                            </a>
                            <div className="projectVideoWrapper">
                                <img
                                    src="https://user-images.githubusercontent.com/99038739/182629806-87f5437a-597c-4599-9adf-059807d76803.gif"
                                    alt="SocialNetwork"
                                ></img>
                            </div>
                            <div className="projectInfoWrapper">
                                <div className="projectInfo">
                                    <h2 className="projectName">
                                        Social Network
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur
                                        sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua.
                                    </p>
                                </div>
                                <div className="techStack">
                                    <ReactIcon></ReactIcon>
                                    <ReduxIcon></ReduxIcon>
                                    <NodejsIcon></NodejsIcon>
                                    <PostgresIcon></PostgresIcon>
                                    <SocketioIcon></SocketioIcon>
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
                            <a
                                href="https://github.com/JojoMohr/practice/tree/jojom/portfolio/projects/connect4"
                                target={"_blank"}
                                rel="noreferrer"
                                className="githubProjectWrapper"
                            >
                                <img src="img/github.png" alt="github" />
                            </a>
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
        </section>
    );
}
