import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import "./SignUp.css";
import { loginUser } from "./store";

function Signin({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const user = useSelector((state) => state.users); // your Redux slice



  // Local state for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();

   
      // Dispatch loginUser with email & password
      dispatch(loginUser({ email, password }));
       setTimeout(() => {
      if (user.isAuthenticated) {
        toast.success("✅ Login Successful!", { position: "top-right", autoClose: 2000 });
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loggedInUser", user.username);
        setIsLoggedIn(true);

        setTimeout(() => navigate("/"), 2000);
      } else {
        toast.error("❌ Login failed! Check your email/password.", { position: "top-right", autoClose: 2000 });
      }
    }, 2000);
    
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign In</h2>
        <form onSubmit={handleSignin}>
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-warning fw-bold px-4 mt-3">
            <i className="bi bi-box-arrow-in-right me-1"></i> Sign In
          </button>
        </form>

        <p className="p-3">
          Don't have an account?{" "}
          <Link to="/signup" className="text-warning fw-bold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
