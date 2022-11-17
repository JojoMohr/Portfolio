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
                        Frontend enthusiast and passionate about web
                        development. React Fan and eager to learn new
                        technologies. Below you can find a summary of all the
                        technologies I have worked so far. I am constantly
                        working on making that list longer.
                        <br></br>
                        Any Idea you might want to put to life? Just hit me up
                        via the contact form on the planet to the right and I
                        will get right back to you 🪐
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
                        <VueIcon></VueIcon>
                        <SocketioIcon></SocketioIcon>
                        <NetlifyIcon></NetlifyIcon>
                        <ContentfulIcon></ContentfulIcon>
                    </div>
                </div>
            </div>
        </>
    );
}
