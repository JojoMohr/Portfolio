import React from "react";
import "./about.css";
import Slide from "react-reveal/Slide";

export default function About() {
    return (
        <>
            <h1 className="heading">About</h1>
            <div className="aboutWrapper">
                <Slide left>
                    <p className="infoText">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                </Slide>
                <Slide right>
                    <div className="picture"></div>
                </Slide>
            </div>
            ;
        </>
    );
}
