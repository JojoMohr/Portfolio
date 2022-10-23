import React from "react";
import ContentfulIcon from "../TechStackIcons/contentfulIcon";
import CssIcon from "../TechStackIcons/cssIcon";
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

export default function About({ closePopup }) {
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
                    <h1>ABOUT</h1>
                    <div id="trenner"></div>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. Lorem
                        ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore et dolore
                        magna aliquyam erat, sed diam voluptua.
                    </p>
                </div>
                <div className="skillsWrapper">
                    <h1 className="skillsHeading">SKILLS</h1>
                    <div id="trenner"></div>
                    <div className="skillIconWrapper">
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
