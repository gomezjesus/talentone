import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import CompanyForm from "./components/CompanyForm";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Companies" component={CompanyForm} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
