import "./main.css";

import About from "./components/about";
import Contact from "./components/contact";
import Landing from "./components/landing";
import NavBar from "./components/navBar";
import Resume from "./components/resume";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <NavBar />
      <div id="landing">
        <Landing />
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact" className="section-classname">
        <Contact />
      </div>
    </>
  );
}

export default App;
