import React, { Component } from "react";

class CompanyForm extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label for="companyName">Company Name</label>
            <input
              type="text"
              class="form-control"
              id="companyName"
              placeholder="Compañia"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CompanyForm;
