import React, { useState } from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // State to store the message

  const LoginHandler = async (e) => {
    e.preventDefault();

    try {
      if (!email || !password) {
        setMessage("Please fill both fields email and password to login");
        return;
      }
      const res = await axios.post("http://127.0.0.1:4000/api/users/login", {
        email,
        password,
      });
      console.log(res);
      setMessage("Login was successful");
      navigate("/welcome");
    } catch (error) {
      console.log(error.response.data.msg || error.message, "Error logging in");
      setMessage(error.response.data.msg || "Login failed. Please try again.");
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      {message && <p className="message">{message}</p>}{" "}
      {/* Display the message */}
      <form onSubmit={LoginHandler}>
        <div className="input-container">
          <label className="email1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label className="pass1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <div className="links">
          <Link to="/reset-password" className="forgot-password">
            Forgot Password?
          </Link>
          <Link to="/create" className="create-account">
            Create New Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Auth;
