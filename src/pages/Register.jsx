import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import indiaLocations from "../data/indiaLocations";

import logo from '../assets/images/logo-mark.png'

const Register = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "India",
    state: "",
    city: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    const { name, value } = e.target;

    if (name === "state") {

      setFormData({
        ...formData,
        state: value,
        city: ""
      });

    } else {

      setFormData({
        ...formData,
        [name]: value
      });

    }

    setErrors({
      ...errors,
      [name]: ""
    });
  };

  const validateForm = () => {

    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.state) {
      newErrors.state = "Please select your state.";
    }

    if (!formData.city) {
      newErrors.city = "Please select your city.";
    }

    if (!formData.password) {
      newErrors.password = "Please create a password.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must contain at least 8 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!agreeTerms) {
      newErrors.terms = "Please accept the Terms & Conditions.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Connect your backend registration API here.

    console.log("Registration Data:", formData);

    // Example:
    // navigate("/login");
  };

  const availableCities =
    formData.state
      ? indiaLocations[formData.state] || []
      : [];

  return (
    <main className="auth-page register-page">

      {/* Background */}
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
          {/* <i className="fa-solid fa-landmark"></i> */}
          <img src={logo} />
        </div>

        <div>
          <h1>Sanskriti Canvas</h1>
          <p>Discover • Preserve • Experience</p>
        </div>

      </div>

      {/* Register Card */}
      <section className="auth-card register-card">

        <div className="auth-card-header">

          {/* <div className="auth-small-icon">
            <i className="fa-solid fa-user-plus"></i>
            <img src={logo} />
          </div> */}

          <h2>Create Your Account</h2>

          <p>
            Join our community and explore India's cultural heritage.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="auth-form register-form"
        >

          {/* Full Name */}
          <div className="form-group">

            <label htmlFor="fullName">
              Full Name
            </label>

            <div
              className={`input-wrapper ${
                errors.fullName ? "input-error" : ""
              }`}
            >

              <i className="fa-regular fa-user input-icon"></i>

              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                autoComplete="name"
              />

            </div>

            {errors.fullName && (
              <span className="error-message">
                <i className="fa-solid fa-circle-exclamation"></i>
                {errors.fullName}
              </span>
            )}

          </div>

          {/* Email */}
          <div className="form-group">

            <label htmlFor="register-email">
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
                id="register-email"
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

          {/* Location row */}
          <div className="location-grid">

            {/* Country */}
            <div className="form-group">

              <label htmlFor="country">
                Country
              </label>

              <div className="input-wrapper select-wrapper">

                <span className="country-flag">
                  🇮🇳
                </span>

                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  disabled
                  onChange={handleChange}
                >
                  <option value="India">
                    India
                  </option>
                </select>

                <i className="fa-solid fa-chevron-down select-arrow"></i>

              </div>

            </div>

            {/* State */}
            <div className="form-group">

              <label htmlFor="state">
                State
              </label>

              <div
                className={`input-wrapper select-wrapper ${
                  errors.state ? "input-error" : ""
                }`}
              >

                <i className="fa-solid fa-map input-icon"></i>

                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                >

                  <option value="">
                    Select State
                  </option>

                  {Object.keys(indiaLocations).map(
                    (stateName) => (

                      <option
                        key={stateName}
                        value={stateName}
                      >
                        {stateName.replaceAll("_", " ")}
                      </option>

                    )
                  )}

                </select>

                <i className="fa-solid fa-chevron-down select-arrow"></i>

              </div>

              {errors.state && (
                <span className="error-message">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  {errors.state}
                </span>
              )}

            </div>

          </div>

          {/* City */}
          <div className="form-group">

            <label htmlFor="city">
              City
            </label>

            <div
              className={`input-wrapper select-wrapper ${
                errors.city ? "input-error" : ""
              }`}
            >

              <i className="fa-solid fa-location-dot input-icon"></i>

              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                disabled={!formData.state}
              >

                <option value="">
                  {formData.state
                    ? "Select City"
                    : "Select State First"}
                </option>

                {availableCities.map(
                  (cityName) => (

                    <option
                      key={cityName}
                      value={cityName}
                    >
                      {cityName}
                    </option>

                  )
                )}

              </select>

              <i className="fa-solid fa-chevron-down select-arrow"></i>

            </div>

            {errors.city && (
              <span className="error-message">
                <i className="fa-solid fa-circle-exclamation"></i>
                {errors.city}
              </span>
            )}

          </div>

          {/* Password */}
          <div className="password-grid">

            <div className="form-group">

              <label htmlFor="register-password">
                Password
              </label>

              <div
                className={`input-wrapper ${
                  errors.password ? "input-error" : ""
                }`}
              >

                <i className="fa-solid fa-lock input-icon"></i>

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  id="register-password"
                  name="password"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
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

            {/* Confirm Password */}
            <div className="form-group">

              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <div
                className={`input-wrapper ${
                  errors.confirmPassword
                    ? "input-error"
                    : ""
                }`}
              >

                <i className="fa-solid fa-lock input-icon"></i>

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >

                  <i
                    className={
                      showConfirmPassword
                        ? "fa-regular fa-eye-slash"
                        : "fa-regular fa-eye"
                    }
                  ></i>

                </button>

              </div>

              {errors.confirmPassword && (
                <span className="error-message">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  {errors.confirmPassword}
                </span>
              )}

            </div>

          </div>

          {/* Terms */}
          <div className="terms-row">

            <label className="custom-checkbox">

              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) =>
                  setAgreeTerms(e.target.checked)
                }
              />

              <span className="checkmark"></span>

              <span>
                I agree to the{" "}
                <Link to="/terms">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link to="/privacy">
                  Privacy Policy
                </Link>
              </span>

            </label>

            {errors.terms && (
              <span className="error-message">
                <i className="fa-solid fa-circle-exclamation"></i>
                {errors.terms}
              </span>
            )}

          </div>

          {/* Register */}
          <button
            type="submit"
            className="auth-submit-btn"
          >

            <span>Create Account</span>

            <i className="fa-solid fa-arrow-right"></i>

          </button>

        </form>

        {/* Login */}
        <div className="auth-switch">

          <span>Already have an account?</span>

          <Link to="/login">
            Sign In
          </Link>

        </div>

        <div className="auth-card-decoration">

          <span></span>

          <i className="fa-solid fa-dharmachakra"></i>

          <span></span>

        </div>

      </section>

    </main>
  );
};

export default Register;