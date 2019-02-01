import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import ImagesHeader from "./components/ImagesHeader";
import About from "./components/About";
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
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
        <AppNavbar />
        <ImagesHeader />
        <About />
        <Services />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}

export default App;
