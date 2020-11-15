import React from "react";
import NavList from "./NavList";
import myImg from "../../images/profileImg.jpg";

function NavigationBar() {
  return (
    <div className="navbar">
      <nav>
        <img src={myImg} alt="Abhishek Ramasubramanian" />
        <p
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Abhishek Ramasubramanian
        </p>
        <NavList />
      </nav>
    </div>
  );
}

export default NavigationBar;
