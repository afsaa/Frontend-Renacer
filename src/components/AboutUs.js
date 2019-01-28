import React from "react";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

import AboutBg from '../img/about/AboutBg.jpeg';

Container.propTypes = {
    fluid: PropTypes.bool
    // applies .container-fluid class
};

export default function AboutUs() {
const BgOverlay = {
    background: "linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url("+ AboutBg +")",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center center",
    color:"#fff",
    height:"100vh",
    paddingTop:"40vh"
};
  return (
    <React.Fragment>
        <Container fluid style={BgOverlay} className="text-center">
            <h1>Quienes Somos</h1>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur doloribus, assumenda dignissimos deleniti in!</h4>
        </Container>
    </React.Fragment>
  )
}
