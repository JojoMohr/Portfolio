import React from "react";
import ContentfulIcon from "../TechStackIcons/contentfulIcon";
import CssIcon from "../TechStackIcons/cssIcon";
import LocalStorageIcon from "../TechStackIcons/database";
import DockerIcon from "../TechStackIcons/dockerIcon";
import GitIcon from "../TechStackIcons/gitIcon";
import HandlebarsIcon from "../TechStackIcons/handlebarsIcon";
import HtmlIcon from "../TechStackIcons/htmlIcon";
import JavaScriptIcon from "../TechStackIcons/javascriptIcon";
import JqueryIcon from "../TechStackIcons/jqueryIcon";
import NetlifyIcon from "../TechStackIcons/netlifyIcon";
import NodejsIcon from "../TechStackIcons/nodejsIcon";
import PostgresIcon from "../TechStackIcons/postgressqlIcon";
import ReactIcon from "../TechStackIcons/reactIcon";
import ReduxIcon from "../TechStackIcons/reduxIcon";
import SocketioIcon from "../TechStackIcons/socketioIcon";
import TypescriptIcon from "../TechStackIcons/typescriptIcon";
import VueIcon from "../TechStackIcons/vueIcon";
import "./about.css";
import NextJsIcon from "../TechStackIcons/nextjs";

export default function About({ closePopup }: any) {
    return (
        <>
            <div className="aboutPopup">
                <img
                    onClick={closePopup}
                    id="closeProjects"
                    src="img/closeIcon.png"
                    alt="Close"
                />
                <div className="aboutWrapper">
                    <h1>ABOUT ME</h1>
                    <div id="trenner"></div>
                    <p id="aboutText">
                        As a passionate frontend developer, I specialize in
                        creating intuitive, responsive, and visually engaging
                        user interfaces that elevate the web experience. I have
                        a strong affinity for React and a drive to continuously
                        expand my expertise in modern web technologies. My
                        hands-on experience spans a diverse range of tools and
                        frameworks, including HTML, CSS, JavaScript, React, Vue,
                        and Angular, allowing me to build seamless and
                        innovative user experiences. I'm always eager to embrace
                        new challenges and approaches, tackling each project
                        with curiosity and creativity. Whether you're seeking a
                        developer to enhance your product or bring your vision
                        to life, I'd love to collaborate.
                        <br></br>
                        Feel free to reach out through the contact form on the
                        planet to the right! Let's work together to create
                        something exceptional! 🚀
                    </p>
                </div>
                <div className="skillsWrapper">
                    <h1 className="skillsHeading">SKILLS</h1>
                    <div id="trenner"></div>
                    <div
                        // data-aos="zoom-in-down"
                        // data-aos-duration="500"
                        // data-aos-easing="ease-in-sine"
                        className="skillIconWrapper"
                    >
                        <NextJsIcon></NextJsIcon>
                        <ReactIcon></ReactIcon>
                        <JavaScriptIcon></JavaScriptIcon>
                        <TypescriptIcon></TypescriptIcon>
                        <GitIcon></GitIcon>
                        <CssIcon></CssIcon>
                        <HtmlIcon></HtmlIcon>
                        <JqueryIcon></JqueryIcon>
                        <HandlebarsIcon></HandlebarsIcon>
                        <DockerIcon></DockerIcon>
                        <NodejsIcon></NodejsIcon>
                        <PostgresIcon></PostgresIcon>
                        <LocalStorageIcon></LocalStorageIcon>
                        <ReduxIcon></ReduxIcon>
                        <SocketioIcon></SocketioIcon>
                        <NetlifyIcon></NetlifyIcon>
                        <ContentfulIcon></ContentfulIcon>
                    </div>
                </div>
            </div>
        </>
    );
}
