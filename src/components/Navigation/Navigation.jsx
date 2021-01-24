import React from "react";
import classes from "./Navigation.module.css";
import myImg from "../../images/profileImg.jpg";
import Hamburger from "./Hamburger/Hamburger";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useState } from "react";

const NavigationBar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleSidebarHandler = () => {
    setShowNav((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <Hamburger closed={!showNav} clicked={toggleSidebarHandler} />
      <MobileMenu showNav={showNav} />
      {!showNav && (
        <img
          src={myImg}
          className={classes.profile2}
          alt="Abhishek Ramasubramanian"
        />
      )}
    </React.Fragment>
  );
};

export default NavigationBar;
