import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Certificate(params) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="body1" component="h2">
            Web Design for Everybody: Basics of Web Development & Coding
            Specialization
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Platform: Coursera
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Completed: July 2020
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Button
          href="https://coursera.org/share/cb160e0cca20385b819f184fcfb664f0"
          size="small"
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Certificate
        </Button>
      </CardActions>
    </Card>
  );
}

export default Certificate;
