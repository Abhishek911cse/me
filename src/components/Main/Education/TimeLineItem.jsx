import React from "react";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  oppositeColor: {
    color: "#c4e7ff",
  },
  timelineContent: {
    padding: "0 16px",
  },
  paperStyle: {
    padding: "5px",
    backgroundColor: "#0f4c75",
    color: "#bbe1fa",
    width: "100%",
    "@media (min-width: 600px)": {
      padding: "5px 15px",
    },
  },
  instituteNameStyle: {
    fontSize: "0.7rem",
    "@media (min-width: 600px)": {
      fontSize: "1rem",
    },
  },
  yearStyle: {
    fontSize: "0.6rem",
    "@media (min-width: 600px)": {
      fontSize: "1rem",
    },
  },
}));

const TimeLineItem = (props) => {
  const classes = useStyles();
  return (
    <TimelineItem>
      {props.opposite && (
        <TimelineOppositeContent>
          <Typography variant="body2" className={classes.oppositeColor}>
            2001
          </Typography>
        </TimelineOppositeContent>
      )}
      <TimelineSeparator>
        <TimelineDot variant="outlined" color={props.dotColor} />
        {props.connector && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent className={classes.timelineContent}>
        {props.last && (
          <Typography variant="body2" className={classes.oppositeColor}>
            Today
          </Typography>
        )}
        {props.paperSide && (
          <Paper className={`${props.paperSide} ${classes.paperStyle}`}>
            <Typography variant="h6" className={classes.instituteNameStyle}>
              {props.institute}
            </Typography>
            <Typography variant="caption" className={classes.yearStyle}>
              {props.years}
            </Typography>
          </Paper>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimeLineItem;
