import React from "react";
import "./projects.css";
import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    FadeIn,
    FadeOut,
    Move,
    MoveIn,
    MoveOut,
    Sticky,
    StickyIn,
    StickyOut,
    Zoom,
    ZoomIn,
    ZoomOut,
} from "react-scroll-motion";

export default function Projects() {
    return (
        <div className="projectsWrapper">
            <Animator animation={batch(MoveIn(0, -200))}>
                <div className="sosoPage">SOUND SOUND </div>
            </Animator>
            <div className="zone">zone</div>
            <div className="zone">zone</div>
            <div className="zone">zone</div>
            <div className="zone">zone</div>
        </div>
    );
}
