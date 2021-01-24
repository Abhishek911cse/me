import React from "react";
import ProjectCard from "./ProjectCard";
import Grid from "@material-ui/core/Grid";
import pharmacyImg from "../../../images/pharmacyProjImg.png";

function Projects(props) {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <Grid container>
        <Grid item xs={4}>
          <ProjectCard
            projName="Pharmacy Management System"
            projDesc="Netus et malesuada fames ac turpis egestas maecenas pharetra. Eu facilisis sed odio morbi quis commodo odio aenean. Maecenas ultricies mi eget mauris pharetra et. Arcu dui vivamus arcu felis bibendum ut tristique et. Dui sapien eget mi proin sed libero enim. Condimentum mattis pellentesque id nibh tortor id. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla."
            imgUrl={pharmacyImg}
            imgTitle="Home page of Pharmacy Management System"
          />
        </Grid>
        <Grid item xs={4}>
          <ProjectCard
            projName="CPU Scheduling Visualizer"
            projDesc="Netus et malesuada fames ac turpis egestas maecenas pharetra. Eu facilisis sed odio morbi quis commodo odio aenean. Maecenas ultricies mi eget mauris pharetra et. Arcu dui vivamus arcu felis bibendum ut tristique et. Dui sapien eget mi proin sed libero enim. Condimentum mattis pellentesque id nibh tortor id. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla."
            imgUrl={pharmacyImg}
            imgTitle="Home page of CPU Scheduling Visualizer"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
