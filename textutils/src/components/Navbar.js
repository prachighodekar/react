import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <div className="d-flex">
          <button
            className="btn mx-1"
            style={{ backgroundColor: "#001f3f", color: "white" }} // dark blue
            onClick={() => {
              document.body.style.backgroundColor = "#001f3f";
              props.setCustomTextColor("white"); // update TextForm text color
            }}
          >
            Blue Mode
          </button>

          <button
            className="btn mx-1"
            style={{ backgroundColor: "#013220", color: "white" }} // dark green
            onClick={() => {
              document.body.style.backgroundColor = "#013220";
              props.setCustomTextColor("white");
            }}
          >
            Green Mode
          </button>

          <button
            className="btn mx-1"
            style={{ backgroundColor: "#5C4033", color: "white" }} // dark brown
            onClick={() => {
              document.body.style.backgroundColor = "#5C4033";
              props.setCustomTextColor("white");
            }}
          >
            Brown Mode
          </button>
        </div>
          <div className={`form-check form-switch my-1 text-${props.mode === 'light' ? 'dark': 'light'}`}>
            <input className="form-check-input mx-1" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
            <label className="form-check-label" htmlFor="switchCheckDefault">{props.mode === 'light' ? 'Enable dark mode' : 'Disable dark mode'}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = { title: PropTypes.string.isRequired };
Navbar.defaultProps = { title: "Add Title" };

export default Navbar;
