import React from "react";
import "./navbar.css";



export default function Navbar() {
    return (
        <>
            <div className="navbarWrapper">
                <h1 id="nameLogo">Johannes Mohr </h1>
                <div className="navbarNavigation">
                    <div>About Me</div>
                    <div>Projects</div>
                    <div>Contact</div>
                </div>
            </div>
        </>
    );
}
