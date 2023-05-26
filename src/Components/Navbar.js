import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  let changebackground;
  if (props.mode === "dark") {
    changebackground = (
      <div className="dropdown mx-4">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Colored Background
        </button>
        <ul className="dropdown-menu">
          <li>
            <button className="dropdown-item" onClick={props.changegreen}>
              Green
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={props.changered}>
              Red
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={props.changeblue} >
              Blue
            </button>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-secondary bg-${props.mode}`}
      data-bs-theme={props.mode}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>
          {props.title}
        </Link>
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
              <Link className="nav-link active" aria-current="page" to='/'>
                {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'>
                {props.about}
              </Link>
            </li>
          </ul>
          {changebackground}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              forhtml="flexSwitchCheckDefault"
            >
              {props.mode === "light" ? "Light Mode" : "Dark Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: `Title goes Here`,
  home: `Home`,
  about: `About`,
};
