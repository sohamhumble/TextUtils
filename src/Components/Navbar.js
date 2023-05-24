import React from "react";
import PropTypes from "prop-types";

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
            <a className="dropdown-item" onClick={props.changegreen} href="#">
              Green
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={props.changered} href="#">
              Red
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={props.changeblue} href="#">
              Blue
            </a>
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
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
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
              <a className="nav-link active" aria-current="page" href="/">
                {props.home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.about}
              </a>
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
