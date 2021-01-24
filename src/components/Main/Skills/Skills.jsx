import { Grid } from "@material-ui/core";
import React from "react";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <div id="skills">
      <h2>Skills</h2>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <SkillCard />
        </Grid>
        <Grid item xs={4}>
          <SkillCard />
        </Grid>
        <Grid item xs={4}>
          <SkillCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Skills;
