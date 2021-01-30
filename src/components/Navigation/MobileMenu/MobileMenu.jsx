import myImg from "../../../images/profileImg.jpg";
import classes from "./MobileMenu.module.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import NavList from "../NavList";
import { CSSTransition } from "react-transition-group";

const mobileMenu = (props) => {
  return (
    <CSSTransition
      in={props.showNav}
      timeout={300}
      classNames={{ ...classes }}
      mountOnEnter
      unmountOnExit
    >
      <nav className={classes.MobileMenu}>
        <div>
          <img
            src={myImg}
            className={classes.profile1}
            alt="Abhishek Ramasubramanian"
          />

          <p className={classes.name}>Abhishek Ramasubramanian</p>
        </div>
        <NavList close={props.close} />
        {/* <br></br> */}
        <div className={classes.contact}>
          <a
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
          <a href="/" style={{ color: "#FFFFFF" }}>
            <GitHubIcon style={{ fontSize: 30 }} />
          </a>
          <a href="/" style={{ color: "#1DA1F2" }}>
            <TwitterIcon style={{ fontSize: 30 }} />
          </a>
        </div>
      </nav>
    </CSSTransition>
  );
};

export default mobileMenu;
