import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from "./store";
import "./SignUp.css";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    // Dispatch data to Redux action
    console.log("Form Data:", data);
    dispatch(registerUser(data))
        toast.success("Signup successful! Please Sign In.");
        navigate("/signin"); // redirect after toast
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            {...register("username", {
              required: "Username is required",
              minLength: { value: 3, message: "At least 3 characters" },
              maxLength: { value: 20, message: "Max 20 characters" },
              pattern: {
                value: /^[a-zA-Z0-9_]+$/,
                message: "Only letters, numbers, underscores allowed",
              },
            })}
          />
          {errors.username && <p className="error">{errors.username.message}</p>}

          {/* Email */}
          <input
            type="email"
            placeholder="Email (must be gmail)"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                message: "Use format: username@gmail.com",
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "At least 6 characters" },
            })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword.message}</p>
          )}

          <button type="submit">Sign Up</button>
        </form>

        <p className="p-3">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default Signup;
