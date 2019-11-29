const axios = require("axios");
const api_url =
  "https://ti3a3ea7j3.execute-api.us-east-2.amazonaws.com/dev/company";
export default {
  companies() {
    return {
      getCompany: id => axios.get(`${api_url}/${id}`),
      getCompanies: () => axios.get(`${api_url}`),
      addCompany: company => axios.post(`${api_url}/add`, company)
    };
  }
};
