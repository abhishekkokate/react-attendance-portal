import { useState } from "react";
import "../assets/styles/login.css";
import _ from "lodash";
import loginSvg from "../assets/svgs/undraw_secure_login_pdn4.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleDetailsChange = _.debounce((e) => {
    setLoginDetails((prevVal) => ({
      ...prevVal,
      [e.target.name]: e.target.value,
    }));
  }, 500);

  const handleLogin = _.debounce((e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const isValid = emailRegex.test(loginDetails?.email || "");

    if (!isValid || !loginDetails?.password) {
      return toast.error("Invalid Email or password!");
    }

    toast.success("Login Successfull!");
    navigate("/home");
  }, 600);
  return (
    <div className="container-main center-a-container">
      <img className="page-main-svg" src={loginSvg} alt="login" />
      <div className="login-form">
        <input
          name="email"
          type="text"
          placeholder="Email"
          onChange={handleDetailsChange}
        />
        <input
          name="password"
          type={(showPassword && "text") || "password"}
          placeholder="password"
          onChange={handleDetailsChange}
        />
        <p className="login-show-pass">
          show password{" "}
          <input
            type="checkbox"
            value={showPassword}
            onChange={() => setShowPassword((prevVal) => !prevVal)}
          />
        </p>
        <button className="btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
