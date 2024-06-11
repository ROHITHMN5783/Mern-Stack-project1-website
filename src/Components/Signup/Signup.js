import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setmessage] = useState("");
  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("http://127.0.0.1:4000/api/users/signup", {
        name,
        email,
        password,
        confirmPassword,
        mobile,
      });
      console.log(res);
      setmessage("Signup was successfull");
      navigate("/welcome");
    } catch (error) {
      console.error(error.message);

      setmessage(error.response.data.msg || "Login failed", error.message);
    }
  };

  const handleLogin = () => {
    navigate("/"); // Navigate to the login page if the account already exists
  };

  return (
    <div className="signup-form-container">
      {message && <h4 className="message">{message}</h4>}
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="input-container">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>Mobile Number</label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
        <div className="linkss">
          <button type="button" className="link-button" onClick={handleLogin}>
            Already have an account? Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
