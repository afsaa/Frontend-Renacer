import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AboutUs from "./components/AboutUs";
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/quienes-somos" component={AboutUs} />
      <Route path="/servicios" component={Services} />
      <Route path="/contacto" component={Testimonials} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
