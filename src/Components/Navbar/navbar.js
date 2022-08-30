import React from "react";
import "./navbar.css";
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


export default function Navbar() {
    return (
        <>
            <div className="navbarWrapper">
                <h1 id="nameLogo">Johannes Mohr </h1>
                <div className="navbar">
                    <div>About Me</div>
                    <div>Projects</div>
                    <div>Contact</div>
                </div>
            </div>
        </>
    );
}
