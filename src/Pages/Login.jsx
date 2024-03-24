import { useState } from "react";
import "../assets/styles/login.css";

const Login = () => {
  const formData = useState({});
  return (
    <div className="container-main center-a-container">
      <div className="login-form">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="password" />
        <button className="btn-primary">Login</button>
      </div>
    </div>
  );
};

export default Login;
