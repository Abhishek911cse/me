import React from "react";
import classes from "./projects.module.css";
import ProjectCard from "./ProjectCard";
import Grid from "@material-ui/core/Grid";
import pharmacyImg from "../../../images/pharmacyProjImg.png";
import { TransitionGroup } from "react-transition-group";

const Projects = (props) => {
  const [idx, setIdx] = React.useState("");

  const handleExpandClick = (currIdx) => {
    if (idx == currIdx) {
      setIdx("");
    } else {
      setIdx(currIdx);
    }
    // setExpanded((prev) => !prev);
  };

  return (
    <div id="projects" className={classes.projects}>
      <h2>Projects</h2>
      <div className={classes.projectsSection}>
        <TransitionGroup>
          <ProjectCard
            key={1}
            id={1}
            projName="Pharmacy Management System"
            projDesc="maecenas pharetra. Eu facilisis sed odio morbi quis commodo odio aenean. Maecenas ultricies mi eget mauris pharetra et. Arcu dui vivamus arcu felis bibendum ut tristique et. Dui sapien eget mi proin sed libero enim. Condimentum mattis pellentesque id nibh tortor id. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla."
            imgUrl={pharmacyImg}
            imgTitle="Home page of Pharmacy Management System"
            handleExpandClick={handleExpandClick}
            idx={idx}
          />
          <ProjectCard
            key={2}
            id={2}
            projName="CPU Scheduling Visualizer"
            projDesc="Netus et malesuada fames ac turpis egestas maecenas pharetra. Eu facilisis sed odio morbi quis commodo odio aenean. Maecenas ultricies mi eget mauris pharetra et. Arcu dui vivamus arcu felis bibendum ut tristique et. Dui sapien eget mi proin sed libero enim. Condimentum mattis pellentesque id nibh tortor id. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla."
            imgUrl={pharmacyImg}
            imgTitle="Home page of CPU Scheduling Visualizer"
            handleExpandClick={handleExpandClick}
            idx={idx}
          />
        </TransitionGroup>
      </div>

      {/* <Grid container alignItems="center" justify="center" spacing={3}>
        <Grid
          item
          xs={10}
          sm={7}
          md={6}
          alignContent="center"
          justify="center"
          className={classes.gridItem}
        >
          <ProjectCard
            projName="Pharmacy Management System"
            projDesc="Netus et malesuada fames ac turpis egestas maecenas pharetra. Eu facilisis sed odio morbi quis commodo odio aenean. Maecenas ultricies mi eget mauris pharetra et. Arcu dui vivamus arcu felis bibendum ut tristique et. Dui sapien eget mi proin sed libero enim. Condimentum mattis pellentesque id nibh tortor id. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla."
            imgUrl={pharmacyImg}
            imgTitle="Home page of Pharmacy Management System"
          />
        </Grid>
        <Grid
          item
          xs={10}
          sm={7}
          md={6}
          alignContent="center"
          justify="center"
          className={classes.gridItem}
        >
          <ProjectCard
            projName="CPU Scheduling Visualizer"
            projDesc="Netus et malesuada fames ac turpis egestas maecenas pharetra. Eu facilisis sed odio morbi quis commodo odio aenean. Maecenas ultricies mi eget mauris pharetra et. Arcu dui vivamus arcu felis bibendum ut tristique et. Dui sapien eget mi proin sed libero enim. Condimentum mattis pellentesque id nibh tortor id. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla."
            imgUrl={pharmacyImg}
            imgTitle="Home page of CPU Scheduling Visualizer"
          />
        </Grid>
        <Grid item md={12} lg={6}>
          
        </Grid>
      </Grid> */}
    </div>
  );
};

export default Projects;
