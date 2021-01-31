import classes from "./intro.module.css";
import React from "react";
// import myImg from "../../images/profileImg.jpg";

const Intro = (props) => {
  const introTitle = "Hey there! Let's";
  const introContent = `As a developer, I help making great websites 
  which are responsive and easy to use.`;
  return (
    <div>
      <div className={classes.introImg}>
        <div className={classes.introContent}>
          <h1>
            {introTitle} <strong>Develop</strong>.
          </h1>
          <hr />
          <p>{introContent}</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
