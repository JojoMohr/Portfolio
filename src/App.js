import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Projects from "./Components/Projects/projects";
import { ScrollContainer, ScrollPage } from "react-scroll-motion";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>

            <ScrollContainer>
                <div className="mainPage">
                    <ScrollPage>
                        <Projects></Projects>
                    </ScrollPage>
                </div>
            </ScrollContainer>
        </div>
    );
}

export default App;
