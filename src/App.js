import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import ImagesHeader from "./components/ImagesHeader";
import About from "./components/About";
import Services from './components/Services';
import Testimonials from './components/Testimonials';
// Reacstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Font Awesome Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

library.add(fab, faEnvelope);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <ImagesHeader />
        <About />
        <Services />
        <Testimonials />
      </div>
    );
  }
}

export default App;
