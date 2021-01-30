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
            projDesc="maecenas pharetra. Eu facilisis sed odio morbi quis commodo odio aenean. Maecenas ultricies mi eget mauris pharetra et. Arcu dui vivamus arcu felis bibendum ut tristique et. Dui sapien eget mi proin sed libero enim. Condimentum mattis pellentesque id nibh tortor id. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla."
            imgUrl={todoAppImg}
            imgTitle="Home page of Task App"
            projLink="https://github.com/Abhishek911cse/Todo-List-App-React.git"
          />
        </div>
        <div>
          <ProjectCard
            projName="CPU Scheduling Visualizer"
            projDesc="Netus et malesuada fames ac turpis egestas maecenas pharetra. Eu facilisis sed odio morbi quis commodo odio aenean. Maecenas ultricies mi eget mauris pharetra et. Arcu dui vivamus arcu felis bibendum ut tristique et. Dui sapien eget mi proin sed libero enim. Condimentum mattis pellentesque id nibh tortor id. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla."
            imgUrl={cpuSchedulerProj}
            imgTitle="Sample CPU Scheduling Visualizer"
            projLink="https://github.com/Siddharth-Gandhi/CPU-Scheduling-Visualizer.git"
          />
        </div>
        <div>
          <ProjectCard
            projName="Pharmacy Management System"
            projDesc="maecenas pharetra. Eu facilisis sed odio morbi quis commodo odio aenean. Maecenas ultricies mi eget mauris pharetra et. Arcu dui vivamus arcu felis bibendum ut tristique et. Dui sapien eget mi proin sed libero enim. Condimentum mattis pellentesque id nibh tortor id. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla."
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
