import React, { Component } from "react";
import CompanyForm from "../components/CompanyForm";
import Estados from "../utils/estados";
import Municipios from "../utils/estado-municipio";
class NewCompany extends Component {
  state = {
    states: null,
    cities: null,
    form: {
      name: "",
      description: "",
      industry: "",
      city: "",
      state: "",
      mission: "",
      vission: "",
      legalName: ""
    }
  };
  componentDidMount() {
    this.setState({
      states: Estados
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedState !== this.state.selectedState) {
      this.setState({
        cities: Municipios[this.state.selectedState]
      });
    }
  }

  render() {
    <CompanyForm onChange={this.handleChange} formValues={this.state.form} />;
  }
}
