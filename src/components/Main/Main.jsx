import React from "react";
import Footer from "./Footer";
import Content from "./Content";
import Intro from "./Intro";
import About from "./About/About";
import Education from "./Education/Education";
import Project from "./Project/Projects";
import Contact from "./Contact";

function Main() {
  return (
    <div className="main">
      <Intro />
      <About />
      <Education />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
