import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Projects from "./Components/Projects/projects";
import About from "./Components/About/about";

function App() {
    return (
        <div className="pageWrapper">
            <Navbar></Navbar>
            <div className="mainPage">
                <About></About>
                <Projects></Projects>
            </div>
        </div>
    );
}

export default App;
