import React, { Component } from "react";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import ServicesAccordion from "./components/ServicesAccordion";
import Testimonials from './components/layout/Testimonials';
import { Switch, Route } from "react-router-dom";
import uuid from 'uuid/v1';
// Reacstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Font Awesome Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

library.add(fab, faEnvelope);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        { id: uuid(), name: "Organizacional", description: "lorem ipsum dolor...", collapse: false},
        { id: uuid(), name: "Educativo", description: "lorem ipsum dolor...", collapse: false},
        {id: uuid(), name: "Social", description: "lorem ipsum dolor...", collapse: false},
        {id: uuid(), name: "Clínico", description: "lorem ipsum dolor...", collapse: false},
        {id: uuid(), name: "Otros", description: "lorem ipsum dolor...", collapse: false}
      ]
    }
    this.showInfo = this.showInfo.bind(this);
  }

  showInfo = (id) => {
    this.setState({ services: this.state.services.map( service => { 
      if (service.id === id) {
        service.collapse = !service.collapse
      }
      return service;
      }) });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quienes-somos" component={AboutUs} />
          <Route path="/servicios" render={props => <ServicesAccordion services={this.state.services} showInfo={this.showInfo} />} />
          <Route path="/contacto" component={Testimonials} />
        </Switch>
      </div>
    );
  }
}

export default App;
