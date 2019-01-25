import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import About from "./components/About";
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/sobre-nosotros" component={About} />
      <Route path="/servicios" component={Services} />
      <Route path="/contacto" component={Testimonials} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
