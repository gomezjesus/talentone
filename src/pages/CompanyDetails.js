import React, { Component } from "react";
import api from "../utils/api";
import Company from "../components/Company";

class CompanyDetails extends Component {
  state = {
    company: []
  };

  async componentDidMount() {
    let res = await api.companies().getCompany(this.props.match.params.id);
    debugger;
    this.setState({
      company: res.data[0]
    });
    console.log(this.props.match.params.id);
    console.log(this.state.company);
  }

  render() {
    return <Company company={this.state.company} />;
  }
}

export default CompanyDetails;
