import React from "react";
import "./projects.css";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

export default function Projects() {
    return (
        <>
            <h1 className="heading">Projects</h1>
            <div className="projectsWrapper">
                <div className="sosoPage">SOUND SOUND </div>
                <div className="zone">zone</div>
                <div className="zone">zone</div>
                <Slide left>
                    <div className="zone">SLIDE</div>
                </Slide>
                <div className="zone">zone</div>
            </div>
        </>
    );
}
