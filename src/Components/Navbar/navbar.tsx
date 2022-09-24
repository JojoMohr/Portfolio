import React from "react";
import { useState } from "react";
import { useEffect } from "react";
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
    let [showNavbar, setShowNavbar] = useState(false);

    function toggleNavbar(): void {
        console.log("CLICKED");
        setShowNavbar((showNavbar = !showNavbar));
    }

    return (
        <>
            <div className="navbarWrapper">
                <img
                    src="img/logoWhite.png"
                    alt="logo"
                    onClick={toggleNavbar}
                ></img>
                {showNavbar && (
                    <div className="navbarNavigation">
                        <Link to="about" spy={true} smooth={true}>
                            <div>About</div>
                        </Link>
                        <Link to="projects" spy={true} smooth={true}>
                            <div>Projects</div>
                        </Link>
                        {/* <Link to="resume" spy={true} smooth={true}> */}
                        <a href="/CV.pdf" download="Johannes Mohr CV">
                            Resume
                        </a>
                        {/* </Link> */}
                    </div>
                )}
            </div>
        </>
    );
}
