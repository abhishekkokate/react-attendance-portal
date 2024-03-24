import { Link } from "react-router-dom";
import notFoundLogo from "../assets/svgs/undraw_page_not_found_re_e9o6.svg";

const NotFound = () => {
  return (
    <div
      className="container-main not-found-container"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        className="page-main-svg main-svg-bg landing-welcome-logo"
        src={notFoundLogo}
        alt="notFound"
      />
      <h1>404 Not Found!</h1>
      <h5>
        The Page you are searching does not exists. <br />
        <Link to="/">Click Here</Link> to navigate to Home Page
      </h5>
    </div>
  );
};

export default NotFound;
