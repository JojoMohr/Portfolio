import React from "react";
import "./about.css";

export default function About() {
    return (
        <div className="pageSection" id="about">
            <h1 data-aos="fade-zoom-in" className="heading">
                About
            </h1>
            <div className="aboutWrapper">
                <div data-aos="fade-left">
                    <h1>Johannes Mohr</h1>
                    <h3>Frontend Developer</h3>
                    <p className="infoText">
                        React fan and always enthusiastic about learning new
                        technologies. I am looking forward to contributing to a
                        creative and collaborative team.
                    </p>
                </div>

                <div data-aos="fade-right" className="picture">
                    <img
                        src="img/profilBild.png"
                        alt="Johannes Mohr Foto"
                    ></img>
                </div>
            </div>
        </div>
    );
}
