import React, { useState } from "react";
import classes from "./Navigation.module.css";
import myImg from "../../images/profileImg.jpg";
import Hamburger from "./Hamburger/Hamburger";
import MobileMenu from "./MobileMenu/MobileMenu";
import SidebarMini from "./Sidebar/SidebarMini";

const NavigationBar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleMobileMenuHandler = () => {
    setShowNav((prevState) => !prevState);
  };

  return (
    <div>
      {window.innerWidth <= 768 ? (
        <React.Fragment>
          {!showNav && (
            <img
              src={myImg}
              className={classes.profile2}
              alt="Abhishek Ramasubramanian"
            />
          )}
          <Hamburger closed={!showNav} clicked={toggleMobileMenuHandler} />
          <MobileMenu showNav={showNav} close={toggleMobileMenuHandler} />
        </React.Fragment>
      ) : (
        <SidebarMini />
      )}
    </div>
  );
};

export default NavigationBar;
