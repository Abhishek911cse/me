import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimeLineItem from "./TimeLineItem";
import Certificate from "./Certificate";
// import Grid from "@material-ui/core/Grid";

function Education(props) {
  return (
    <div id="education">
      <h2>Education and Certificates</h2>
      {/* <Grid container spacing={3} justify="center" direction="row">
        <Grid item xs={7}> */}
      <Timeline align="alternate">
        <TimeLineItem
          dotColor="secondary"
          connector={true}
          opposite={true}
          paperSide="paperRight"
          institute="D.A.V Public School, Thane West"
          years="2004-2017"
        />
        <TimeLineItem
          dotColor="primary"
          connector={true}
          paperSide="paperLeft"
          institute="PACE Jr. Science College, Thane West"
          years="2017-2019"
        />
        <TimeLineItem
          dotColor="secondary"
          connector={true}
          paperSide="paperRight"
          institute="Vellore Institute of Technology, Vellore"
          years="2019-2023 (Estimated)"
        />
        <TimeLineItem last={true} dotColor="primary" />
      </Timeline>
      {/* </Grid> */}
      {/* <Grid item xs={5}>
          
        </Grid>
      </Grid> */}
      <Certificate />
    </div>
  );
}

export default Education;
