import React, { Component } from "react";
import CompanyForm from "../components/CompanyForm";
import Estados from "../utils/estados";
import Municipios from "../utils/estado-municipio";
import api from "../utils/api";
class NewCompany extends Component {
  state = {
    states: Estados,
    cities: null,
    form: {
      name: "",
      description: "",
      industry: "",
      city: "",
      state: "",
      mission: "",
      vission: "",
      legalName: "",
      selectedCity: "",
      selectedState: ""
    },
    companies: []
  };

  async componentDidMount() {
    let res = await api.companies().getCompanies();

    this.setState({
      companies: res.data
    });
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    api
      .companies()
      .addCompany(this.state.form)
      .then(res => {
        console.log(res);
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.form.selectedState !== this.state.form.selectedState) {
      this.setState({
        cities: Municipios[this.state.form.selectedState]
      });
    }
  }

  render() {
    return (
      <CompanyForm
        onChange={this.handleChange}
        formValues={this.state.form}
        states={this.state.states}
        cities={this.state.cities}
        onSubmit={this.handleSubmit}
      />
    );
  }
}
export default NewCompany;
