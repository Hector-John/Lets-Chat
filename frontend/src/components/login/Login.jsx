import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.scss";
import avatar from "../../assets/avatar.png";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import github from "../../assets/github.png";

const Login = () => {
  const [avatarData, setAvatarData] = useState({
    file: null,
    url: "",
  });
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatarData({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginSuccess(false);
    setLoginSuccess(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setRegisterSuccess(false);
    setRegisterSuccess(true);
  };

  if (loginSuccess) {
    toast.success("Login successful.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (!loginSuccess && !registerSuccess) {
    toast.error("Login failed! Please check your credentials.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  if (registerSuccess) {
    toast.success("Registration successful.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (!loginSuccess && !registerSuccess) {
    toast.error("Registration failed! Please try again later.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div className="Login">
      {showLoginForm ? (
        <div className="login item">
          <h1>Welcome</h1>
          <h4>Login in with</h4>
          <div className="social">
            <img src={google} alt="" />
            <img src={facebook} alt="" />
            <img src={github} alt="" />
          </div>
          <div className="or">
            <hr /> or <hr />
          </div>
          <h4>Login in with email</h4>
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account?{" "}
            <span className="toggle-form" onClick={toggleForm}>
              {" "}
              Create a new one
            </span>
          </p>
        </div>
      ) : (
        <div className="register item">
          {avatarData.url && <img src={avatarData.url} alt="Avatar" />}
          {!avatarData.url && <img src={avatar} alt="Default Avatar" />}
          <h1>Create an account</h1>
          <form onSubmit={handleRegister}>
            <label htmlFor="file">
              <span> Click here to upload image</span>
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleAvatar}
            />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account?{" "}
            <span className="toggle-form" onClick={toggleForm}>
              {" "}
              Login
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
