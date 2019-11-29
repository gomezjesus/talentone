import React, { Component } from "react";
import { Link } from "react-router-dom";
class CompaniesList extends Component {
  render() {
    return (
      <div className="container">
        {this.props.companies.length !== 0 ? (
          <table class="table table-dark ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Tipo de Industria</th>
                <th scope="col">Estado</th>
                <th scope="col">Municipio</th>
              </tr>
            </thead>
            <tbody>
              {this.props.companies.map(company => {
                return (
                  <tr>
                    <th scope="row">
                      <Link
                        className="nav-link"
                        to={`/company/${company.CompanyID}`}
                      >
                        {company.Name}
                      </Link>
                    </th>
                    <td>{company.Industry}</td>
                    <td>{company.State}</td>
                    <td>{company.City}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default CompaniesList;
