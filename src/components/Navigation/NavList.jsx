import React from "react";
import NavLinks from "./NavLinks";
import PersonIcon from "@material-ui/icons/Person";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
// import ContactsIcon from "@material-ui/icons/Contacts";
import BuildIcon from "@material-ui/icons/Build";

function NavigationBar() {
  return (
    <ul style={{ display: "flex", flexFlow: "column", padding: "0" }}>
      <NavLinks whichPart="about" name="About" linkIcon={<PersonIcon />} />
      <NavLinks whichPart="projects" name="Projects" linkIcon={<WorkIcon />} />
      <NavLinks
        whichPart="education"
        name="Education"
        linkIcon={<SchoolIcon />}
      />

      <NavLinks whichPart="skills" name="Skills" linkIcon={<BuildIcon />} />
      {/* <NavLinks
        whichPart="contact"
        name="Contact"
        linkIcon={<ContactsIcon />}
      /> */}
    </ul>
  );
}

export default NavigationBar;
