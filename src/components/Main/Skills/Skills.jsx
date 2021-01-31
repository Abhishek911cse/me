import { Grid } from "@material-ui/core";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div id="skills">
      <h2>Skills</h2>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={6} md={4}>
          <SkillCard
            name="React"
            icon={<i class="fab fa-react" style={{ color: "#61DAFB" }}></i>}
            color="#61DAFB"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SkillCard
            name="SQL"
            icon={<i class="fas fa-database" style={{ color: "#00758F" }}></i>}
            color="#00758F"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SkillCard
            name="Express.js"
            icon={<i class="fab fa-node" style={{ color: "#77B062" }}></i>}
            color="#77B062"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
