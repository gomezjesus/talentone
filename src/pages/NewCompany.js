import React, { Component } from "react";
import CompanyForm from "../components/CompanyForm";
import Estados from "../utils/estados";
import Municipios from "../utils/estado-municipio";
class NewCompany extends Component {
  constructor() {
    super();
    this.state = {
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
        legalName: "",
        selectedCity: "",
        selectedState: ""
      }
    };

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({
      states: Estados
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
      />
    );
  }
}
export default NewCompany;
