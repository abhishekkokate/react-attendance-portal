import viteLogo from "../assets/icons/vite.svg";
import "../assets/styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/home" className="logo">
          <img src={viteLogo} alt="AP" />
          <p>Attenace Portal</p>
        </Link>
        <div className="navbar-links">
          <Link to="/home">Home</Link>
          <Link to="/home/calender">Calender</Link>
          <Link to="/login" className="btn-primary is-link">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
