import React from "react";
import classes from "./projectCard.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import { CSSTransition } from "react-transition-group";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   // maxWidth: 345,
  //   width: "100%",
  // },
  // media: {
  //   height: 140,
  // },
  // projectTitle: {
  //   textAlign: "center",
  //   fontSize: "1rem",
  //   margin: 0,
  // },
  // actionArea: {
  //   justifyContent: "space-between",
  // },
  expand: {
    transform: "rotate(0deg)",
    padding: 0,
    marginLeft: "auto",
    color: "#bbe1fa",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

function ProjectCard(props) {
  const localClasses = useStyles();

  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded((prev) => !prev);
  // };
  return (
    <div className={classes.ProjectCard}>
      <div className={classes.projectImage}>
        <img
          src={`${props.imgUrl}`}
          alt={props.imgTitle}
          style={{ width: "inherit" }}
        ></img>
      </div>
      <div className={classes.projectCardActions}>
        <a>
          <button className={classes.srcCodeBtn}>SOURCE CODE</button>
        </a>
        <IconButton
          className={`${localClasses.expand} ${
            props.id == props.idx ? localClasses.expandOpen : null
          }`}
          onClick={() => props.handleExpandClick(props.id)}
          aria-expanded={props.id == props.idx}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </div>
      <Collapse
        in={props.id == props.idx}
        timeout="auto"
        mountOnEnter
        unmountOnExit
      >
        <div className={classes.projectContent}>{props.projDesc}</div>
      </Collapse>
    </div>
  );
}

export default ProjectCard;
