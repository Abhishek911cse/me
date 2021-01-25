import React from "react";
import NavLinks from "./NavLinks";
import PersonIcon from "@material-ui/icons/Person";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
// import ContactsIcon from "@material-ui/icons/Contacts";
import BuildIcon from "@material-ui/icons/Build";

const NavigationBar = (props) => {
  return (
    <ul style={{ display: "flex", flexFlow: "column", padding: "0" }}>
      <NavLinks
        whichPart="about"
        linkName="About"
        linkIcon={<PersonIcon />}
        close={props.close}
      />
      <NavLinks
        whichPart="projects"
        linkName="Projects"
        linkIcon={<WorkIcon />}
        close={props.close}
      />
      <NavLinks
        whichPart="education"
        linkName="Education"
        linkIcon={<SchoolIcon />}
        close={props.close}
      />

      <NavLinks
        whichPart="skills"
        linkName="Skills"
        linkIcon={<BuildIcon />}
        close={props.close}
      />
      {/* <NavLinks
        whichPart="contact"
        name="Contact"
        linkIcon={<ContactsIcon />}
      /> */}
    </ul>
  );
};

export default NavigationBar;
