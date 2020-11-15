import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function NavLinks(props) {
  const link = "#" + props.whichPart;
  return (
    <li className="nav-links">
      <AnchorLink offset={() => 20} href={link}>
        {props.linkIcon}&nbsp;&nbsp;<p>{props.name}</p>
      </AnchorLink>
    </li>
  );
}

export default NavLinks;
