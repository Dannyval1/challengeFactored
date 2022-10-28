import React from "react";
import logo from "./../../assets/images/logo-danny.png";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const signOut = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("isLogged");

    navigate({
      pathname: "/",
    });
  };
  return (
    <nav
      className="
        navbar navbar-expand-lg navbar-light"
      id="header-two"
    >
      <div className="container">
        <img
          src={logo}
          className="app-logo navbar-brand"
          alt="Logo"
          width="75"
        />
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex main-menu">
            <li className="nav-item">
              <button className="nav-link logOut" onClick={signOut}>
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
