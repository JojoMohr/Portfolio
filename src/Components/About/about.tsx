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
                        Here's a possible new text for your About Me section: As
                        a frontend developer, I am dedicated to crafting
                        engaging and responsive user interfaces that make the
                        web a more enjoyable place to be. With a passion for web
                        development and a love for React, I am constantly
                        seeking to learn and explore new technologies to improve
                        my skills and build better user experiences. Throughout
                        my career, I have gained hands-on experience working
                        with a variety of technologies, including HTML, CSS,
                        JavaScript, React, Vue, Angular, and more. I am always
                        eager to take on new challenges and expand my skillset,
                        and I approach each project with a curious and creative
                        mindset. If you're looking for a skilled and
                        enthusiastic frontend developer to help bring your
                        project to life, please don't hesitate to get in touch.
                        <br></br>
                        You can use the contact form on the planet to the right,
                        and I will be happy to chat with you about your needs
                        and goals. Let's create something amazing together! 🚀.
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
