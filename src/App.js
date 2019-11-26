import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
//import CompanyForm from "./components/CompanyForm";
import NewCompany from "./pages/NewCompany";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Companies" component={NewCompany} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
