import React, { Component } from "react";
import api from "../utils/api";
import CompaniesList from "../components/CompaniesList";

class Companies extends Component {
  state = {
    companies: []
  };

  async componentDidMount() {
    let res = await api.companies().getCompanies();
    this.setState({
      companies: res.data
    });
  }

  render() {
    return <CompaniesList companies={this.state.companies} />;
  }
}

export default Companies;
