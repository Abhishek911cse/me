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
        {/* <ul style={{ display: "flex", flexFlow: "column" }}>
          <NavLinks
            whichPart="about"
            linkIcon={<PersonIcon style={{ fontSize: 26 }} />}
          />
          <NavLinks
            whichPart="projects"
            linkIcon={<WorkIcon style={{ fontSize: 26 }} />}
          />
          <NavLinks
            whichPart="education"
            linkIcon={<SchoolIcon style={{ fontSize: 26 }} />}
          />
          <NavLinks
            whichPart="skills"
            linkIcon={<BuildIcon style={{ fontSize: 26 }} />}
          />
        </ul> */}
        <div className={classes.common}>
          <AnchorLink
            offset={() => 20}
            href="#about"
            className={classes.expandedNavLinks}
          >
            <PersonIcon />
          </AnchorLink>
          {/* <a href="#about" className={classes.expandedNavLinks}>
            <PersonIcon />
          </a> */}
          <AnchorLink
            offset={() => 20}
            href="#projects"
            className={classes.expandedNavLinks}
          >
            <WorkIcon />
          </AnchorLink>
          {/* <a href="#projects" className={classes.expandedNavLinks}>
            <WorkIcon />
          </a> */}
          <AnchorLink
            offset={() => 20}
            href="#education"
            className={classes.expandedNavLinks}
          >
            <SchoolIcon />
          </AnchorLink>
          {/* <a href="#education" className={classes.expandedNavLinks}>
            <SchoolIcon />
          </a> */}
          <AnchorLink
            offset={() => 20}
            href="#skills"
            className={classes.expandedNavLinks}
          >
            <BuildIcon />
          </AnchorLink>
          {/* <a href="#skills" className={classes.expandedNavLinks}>
            <BuildIcon />
          </a> */}
        </div>
        {/* style={{ fontSize: 26 }} */}
        {/* <a
            href="mailto:0901abhishek.r@gmail.com"
            style={{ color: "#E94034" }}
          >
            <EmailIcon style={{ fontSize: 30 }} />
          </a>
          <a href="tel:+919321215019" style={{ color: "#3282b8" }}>
            <PhoneIcon style={{ fontSize: 30 }} />
          </a>
          <a href="/" style={{ color: "#0A66C2" }}>
            <LinkedInIcon style={{ fontSize: 30 }} />
          </a>
          <a href="/" style={{ color: "#161B22" }}>
            <GitHubIcon style={{ fontSize: 30 }} />
          </a>
          <a href="/" style={{ color: "#1DA1F2" }}>
            <TwitterIcon style={{ fontSize: 30 }} />
          </a> */}
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
