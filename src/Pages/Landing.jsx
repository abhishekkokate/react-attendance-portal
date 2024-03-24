import { Link } from "react-router-dom";
import welcomeLogo from "../assets/svgs/undraw_welcome_re_h3d9.svg";
import "../assets/styles/landing.css";

const Landing = () => {
  return (
    <div className="container-main landing-container center-a-container">
      <img className="landing-welcome-logo" src={welcomeLogo} alt="Welcome" />
      <h2>Welcome to Attendence Portal</h2>
      <Link to="/login" className="landing-login-link btn-primary">
        Login here
      </Link>
    </div>
  );
};

export default Landing;
