import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import About from "./components/About";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
