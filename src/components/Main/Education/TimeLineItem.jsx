import React from "react";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function TimeLineItem(props) {
  return (
    <TimelineItem>
      {props.opposite && (
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2001
          </Typography>
        </TimelineOppositeContent>
      )}
      <TimelineSeparator>
        <TimelineDot variant="outlined" color={props.dotColor} />
        {props.connector && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        {props.last && (
          <Typography variant="body2" color="textSecondary">
            Today
          </Typography>
        )}
        {props.paperSide && (
          <Paper className={props.paperSide}>
            <Typography variant="h6">{props.institute}</Typography>
            <Typography variant="caption">{props.years}</Typography>
          </Paper>
        )}
      </TimelineContent>
    </TimelineItem>
  );
}

export default TimeLineItem;
