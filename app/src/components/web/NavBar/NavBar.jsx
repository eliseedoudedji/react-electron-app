import React from "react";
import "./NavBar.css";
import light from "@assets/light.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-white bg-opacity-75 backdrop-blur-md">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={light} width={50} height={50} alt="light-logo" className="d-inline-block align-text-top" />
        </Link>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <Link className="nav-link fw-bold text-primary" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="btn btn-primary px-4 py-2 rounded-pill shadow-sm transition-all hover:scale-105 hover:bg-blue-700">
                Se connecter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default NavBar;
