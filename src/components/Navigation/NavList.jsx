import React from "react";
import NavLinks from "./NavLinks";
import PersonIcon from "@material-ui/icons/Person";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import ContactsIcon from "@material-ui/icons/Contacts";

function NavigationBar() {
  return (
    <ul style={{ display: "inline-block" }}>
      <NavLinks whichPart="about" name="About" linkIcon={<PersonIcon />} />
      <NavLinks
        whichPart="education"
        name="Education"
        linkIcon={<SchoolIcon />}
      />
      <NavLinks whichPart="projects" name="Projects" linkIcon={<WorkIcon />} />
      <NavLinks
        whichPart="contact"
        name="Contact"
        linkIcon={<ContactsIcon />}
      />
    </ul>
  );
}

export default NavigationBar;
