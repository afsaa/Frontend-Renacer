import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AboutUs from "./components/AboutUs";
import ServicesAccordion from "./components/ServicesAccordion";
import Testimonials from "./components/Testimonials";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/quienes-somos" component={AboutUs} />
      <Route path="/servicios" render={() => <ServicesAccordion services={this.state.services} />} />
      <Route path="/contacto" component={Testimonials} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
