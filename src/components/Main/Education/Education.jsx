import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimeLineItem from "./TimeLineItem";
import Certificate from "./Certificate";

const Education = (props) => {
  return (
    <div id="education">
      <h2>Education and Certificates</h2>
      <div>
        <Timeline align="alternate" style={{ padding: 0 }}>
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
            years="2019-2023"
          />
          <TimeLineItem last={true} dotColor="primary" />
        </Timeline>
      </div>
      <Certificate />
    </div>
  );
};

export default Education;
