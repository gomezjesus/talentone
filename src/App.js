import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Companies from "./pages/Companies";
import Layout from "./components/Layout";
import CompanyDetails from "./pages/CompanyDetails";
import NewCompany from "./pages/NewCompany";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Companies} />
          <Route exact path="/Companies" component={NewCompany} />
          <Route exact path="/company/:id" component={CompanyDetails} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
