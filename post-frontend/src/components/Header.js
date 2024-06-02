import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import image from "../assets/blog-logo.jpg";
import "react-bootstrap-typeahead/css/Typeahead.css";
const Header = () => {
  const navigate = useNavigate();
  const authState = useSelector((state) => state?.auth?.user);

  const firstLetter = authState?.firstname.charAt(0).toUpperCase();
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark py-3 bg-transparent">
        <div className="container-fluid">
          <NavLink className="logo">
            <img src={image} alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav gap-2 me-4 mb-2 mb-lg-0">
              <li>
                <NavLink className="nav-button" to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-button" to="/signup">
                  Signup
                </NavLink>
              </li>
              <li>
                {authState && (
                  <button
                    className="logout nav-button"
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    LOG-OUT
                  </button>
                )}
              </li>
              <li>
                {authState && (
                  <NavLink className="profile ms-2" to="/profile">
                    {firstLetter}
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
