import React, { Component } from 'react'
import AppNavbar from "../layout/AppNavbar";
import ImagesHeader from "../layout/ImagesHeader";
import About from "../layout/About";
import Services from "../layout/Services";
import Testimonials from "../layout/Testimonials";
import Footer from "../layout/Footer";

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
