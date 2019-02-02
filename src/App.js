import React, { Component } from "react";
import Home from './components/Home'
import AboutUs from "./components/AboutUs";
import ServicesAccordion from "./components/ServicesAccordion";
import Testimonials from './components/Testimonials';
import { Switch, Route } from "react-router-dom";
// Reacstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Font Awesome Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

library.add(fab, faEnvelope);

class App extends Component {
  constructor() {
    super();
    this.state = {
      services: [
        {id: 1, name: "Organizacional", description: "lorem ipsum dolor..."},
        {id: 2, name: "Educativo", description: "lorem ipsum dolor..."},
        {id: 3, name: "Social", description: "lorem ipsum dolor..."},
        {id: 4, name: "Clínico", description: "lorem ipsum dolor..."},
        {id: 5, name: "Otros", description: "lorem ipsum dolor..."}
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quienes-somos" component={AboutUs} />
          <Route path="/servicios" render={(services) => <ServicesAccordion {...services} services={this.state.services} />} />
          <Route path="/contacto" component={Testimonials} />
        </Switch>
      </div>
    );
  }
}

export default App;
