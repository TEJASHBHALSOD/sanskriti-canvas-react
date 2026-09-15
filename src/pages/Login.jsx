import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

import logo from '../assets/images/logo-mark.png'

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ""
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.password) {
      newErrors.password = "Please enter your password.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Connect your backend authentication here.

    console.log("Login Data:", {
      ...formData,
      rememberMe
    });

    // Example:
    // navigate("/dashboard");
  };

  return (
    <main className="auth-page">
    <div className="login-mian-div">

      {/* Background decoration */}
      <div className="auth-overlay"></div>

      {/* Home Button */}
      <button
        className="auth-home-btn"
        onClick={() => navigate("/")}
      >
        <i className="fa-solid fa-arrow-left"></i>
        <span>Home</span>
      </button>

      {/* Brand */}
      <div className="auth-brand">
        <div className="auth-brand-icon">
          <img src={logo} />
        </div>

        <div>
          <h1>Sanskriti Canvas</h1>
          <p>Discover • Preserve • Experience</p>
        </div>
      </div>

      {/* Login Card */}
      <section className="auth-card login-card">

        <div className="auth-card-header">

          {/* <div className="auth-small-icon">
            <i className="fa-solid fa-feather-pointed"></i>
            <img src={logo} />
          </div> */}

          <h2>Welcome Back</h2>

          <p>
            Continue your journey through India's rich cultural heritage.
          </p>

        </div>

        <form onSubmit={handleSubmit} className="auth-form">

          {/* Email */}
          <div className="form-group">

            <label htmlFor="email">
              Email Address
            </label>

            <div
              className={`input-wrapper ${
                errors.email ? "input-error" : ""
              }`}
            >

              <i className="fa-regular fa-envelope input-icon"></i>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />

            </div>

            {errors.email && (
              <span className="error-message">
                <i className="fa-solid fa-circle-exclamation"></i>
                {errors.email}
              </span>
            )}

          </div>

          {/* Password */}
          <div className="form-group">

            <div className="label-row">

              <label htmlFor="password">
                Password
              </label>

              <button
                type="button"
                className="forgot-link"
                onClick={() => alert("Forgot password feature coming soon.")}
              >
                Forgot Password?
              </button>

            </div>

            <div
              className={`input-wrapper ${
                errors.password ? "input-error" : ""
              }`}
            >

              <i className="fa-solid fa-lock input-icon"></i>

              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
                >   
                <i
                  className={
                    showPassword
                      ? "fa-regular fa-eye-slash"
                      : "fa-regular fa-eye"
                  }
                ></i>
              </button>

            </div>

            {errors.password && (
              <span className="error-message">
                <i className="fa-solid fa-circle-exclamation"></i>
                {errors.password}
              </span>
            )}

          </div>

          {/* Remember */}
          <div className="remember-row">

            <label className="custom-checkbox">

              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />

              <span className="checkmark"></span>

              <span>Remember me</span>

            </label>

          </div>

          {/* Login button */}
          <button type="submit" className="auth-submit-btn">

            <span>Sign In</span>

            <i className="fa-solid fa-arrow-right"></i>

          </button>

        </form>

        {/* Register */}
        <div className="auth-switch">

          <span>Don't have an account?</span>

          <Link to="/register">
            Create Account
          </Link>

        </div>

        {/* Bottom decoration */}
        <div className="auth-card-decoration">
          <span></span>
          <i className="fa-solid fa-dharmachakra"></i>
          <span></span>
        </div>

      </section>
    </div>
    </main>
  );
};

export default Login;