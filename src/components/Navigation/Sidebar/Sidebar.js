const sidebar = (props) => (
  <div className={navbarClasses.join(" ")}>
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
      {/* <p>
              <EmailIcon />
              <a href="mailto:0901abhishek.r@gmail.com">
                0901abhishek.r@gmail.com
              </a>
            </p>
            <p>
              <PhoneIcon />
              <a href="tel:+919321215019">+919321215019</a>
            </p>
            <NavList /> */}
      <a href="/">
        {" "}
        <LinkedInIcon />{" "}
      </a>
      <a href="/">
        {" "}
        <GitHubIcon />{" "}
      </a>
      <a href="/">
        {" "}
        <TwitterIcon />{" "}
      </a>
    </nav>
  </div>
);

export default sidebar;
