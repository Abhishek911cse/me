import React from "react";
import Footer from "./Footer/Footer";
import Intro from "./Intro/Intro";
import About from "./About/About";
import Timeline from "./Timeline/Timeline";
import Project from "./Project/Projects";
import Skills from "./Skills/Skills";
import classes from "./main.module.css";

const Main = () => {
  return (
    <div className={classes.main}>
      <Intro />
      <About />
      <hr className={classes.footerHR}></hr>
      <Project />
      <hr className={classes.footerHR}></hr>
      <Timeline />
      <hr className={classes.footerHR}></hr>
      <Skills />
      <hr className={classes.footerHR}></hr>
      <Footer />
    </div>
  );
};

export default Main;
