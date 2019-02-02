import React, { Component } from 'react'
import AppNavbar from "./AppNavbar";
import ImagesHeader from "./ImagesHeader";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

export class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <ImagesHeader/>
        <About/>
        <Services/>
        <Testimonials/>
        <Footer/>
      </div>
    )
  }
}

export default Home;
