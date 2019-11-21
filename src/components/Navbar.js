import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">TalentOne</a>
        <button class="navbar-toggler" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link">Features</a>
            <a class="nav-item nav-link">Pricing</a>
            <a
              class="nav-item nav-link disabled"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
