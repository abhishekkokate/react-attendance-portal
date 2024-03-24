import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="not-found-container"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>404 Not Found!</h1>
      <h5>
        The Page you are searching does not exists. <br />
        <Link to="/">Click Here</Link> to navigate to Home Page
      </h5>
    </div>
  );
};

export default NotFound;
