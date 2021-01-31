import React from "react";
import classes from "./projects.module.css";
import ProjectCard from "./ProjectCard";
import pharmacyImg from "../../../images/pharmacyProjImg.jpg";
import todoAppImg from "../../../images/todoAppProj.png";
import cpuSchedulerProj from "../../../images/osVisualizerProj.png";

const Projects = (props) => {
  return (
    <div id="projects" className={classes.projects}>
      <h2>Projects</h2>
      <div className={classes.projectsSection}>
        <div>
          <ProjectCard
            projName="Task App"
            projDesc={`A task app made for storing simple task lists. 
            This is made purely using React. It's a template for making frontend for task apps. 
            The app features task lists which can contain sub tasks. Each sub task can have an 
            associated content and a timestamp.`}
            imgUrl={todoAppImg}
            imgTitle="Home page of Task App"
            projLink="https://github.com/Abhishek911cse/Todo-List-App-React.git"
          />
        </div>
        <div>
          <ProjectCard
            projName="CPU Scheduling Visualizer"
            projDesc={`This project demonstrates several CPU scheduling algorithms in a graphical way. 
            The project is built using Python. The purpose of the app is to help visualize the CPU scheduling algorithms 
            and make it easy to understand. The app was made in collaboration with my classmates.`}
            imgUrl={cpuSchedulerProj}
            imgTitle="Sample CPU Scheduling Visualizer"
            projLink="https://github.com/Siddharth-Gandhi/CPU-Scheduling-Visualizer.git"
          />
        </div>
        <div>
          <ProjectCard
            projName="Pharmacy Management System"
            projDesc={`This app helps to manage a single pharmacy store. 
            The app is built with backend in Node.js + Express.js, database used is MySQL and frontend in HTML, CSS and JS with
             Bootstrap library. This is a simple to use app which can generate bills, manage and maintain storage and keeps records 
             of employees with proper authentication.`}
            imgUrl={pharmacyImg}
            imgTitle="Home page of Pharmacy Management System"
            projLink="https://github.com/Abhishek911cse/Pharmacy-Management-System.git"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
