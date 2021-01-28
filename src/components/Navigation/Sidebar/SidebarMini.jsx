// import GitHubIcon from "@material-ui/icons/GitHub";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import EmailIcon from "@material-ui/icons/Email";
// import PhoneIcon from "@material-ui/icons/Phone";
import PersonIcon from "@material-ui/icons/Person";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
// import ContactsIcon from "@material-ui/icons/Contacts";
import BuildIcon from "@material-ui/icons/Build";
import NavLinks from "../NavLinks";
import classes from "./Sidebar.module.css";
import myImg from "../../../images/profileImg.jpg";
import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { CSSTransition } from "react-transition-group";

const SidebarMini = (props) => {
  const [expandNav, setExpandNav] = useState(false);
  return (
    <div
      onMouseOver={() => setExpandNav(true)}
      onMouseLeave={() => setExpandNav(false)}
    >
      <div
        className={classes.desktopMini}
        onMouseOver={() => setExpandNav(true)}
      >
        <img
          src={myImg}
          className={classes.profile2}
          alt="Abhishek Ramasubramanian"
        />
        <div className={classes.common}>
          <AnchorLink
            offset={() => 20}
            href="#about"
            className={classes.expandedNavLinks}
          >
            <PersonIcon />
          </AnchorLink>
          <AnchorLink
            offset={() => 20}
            href="#projects"
            className={classes.expandedNavLinks}
          >
            <WorkIcon />
          </AnchorLink>
          <AnchorLink
            offset={() => 20}
            href="#education"
            className={classes.expandedNavLinks}
          >
            <SchoolIcon />
          </AnchorLink>
          <AnchorLink
            offset={() => 20}
            href="#skills"
            className={classes.expandedNavLinks}
          >
            <BuildIcon />
          </AnchorLink>
        </div>
      </div>
      <CSSTransition
        in={expandNav}
        timeout={300}
        classNames={{ ...classes }}
        mountOnEnter
        unmountOnExit
      >
        <div className={classes.expandedNav}>
          <img
            src={myImg}
            className={classes.profile2}
            alt="Abhishek Ramasubramanian"
            style={{ visibility: "hidden" }}
          />
          <div>
            <a href="#about" className={classes.expandedNavLinks}>
              About
            </a>

            <a href="#projects" className={classes.expandedNavLinks}>
              Projects
            </a>

            <a href="#education" className={classes.expandedNavLinks}>
              Education
            </a>

            <a href="#skills" className={classes.expandedNavLinks}>
              Skills
            </a>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default SidebarMini;
