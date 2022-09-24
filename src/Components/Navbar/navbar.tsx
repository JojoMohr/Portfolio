import React from "react";
import "./navbar.css";

// import * as Scroll from "react-scroll";
import {
    Link,
    // Button,
    // Element,
    // Events,
    animateScroll as scroll,
    // scrollSpy,
    // scroller,
} from "react-scroll";

export default function Navbar() {
    return (
        <>
            <div className="navbarWrapper">
                <img src="img/logoWhite.png" alt="logo"></img>
                <div className="navbarNavigation">
                    <Link to="about" spy={true} smooth={true}>
                        <div>About</div>
                    </Link>
                    <Link to="projects" spy={true} smooth={true}>
                        <div>Projects</div>
                    </Link>
                    {/* <Link to="contact" spy={true} smooth={true}>
                        <div>Contact</div>
                    </Link> */}
                </div>
            </div>
        </>
    );
}
