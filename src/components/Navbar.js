import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand">TalentOne</Link>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">
              <span className="">Home</span>
            </Link>
            <Link className="nav-item nav-link" to="/Companies">
              Add Company
            </Link>
            <Link className="nav-item nav-link">Pricing</Link>
            <Link
              className="nav-item nav-link disabled"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
