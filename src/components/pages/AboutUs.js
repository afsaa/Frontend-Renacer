import React from "react";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

import AboutBg from '../../img/about/AboutBg.jpeg';

Container.propTypes = {
    fluid: PropTypes.bool
    // applies .container-fluid class
};

export default function AboutUs() {
const BgOverlay = {
    position:"relative",
    background:"linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url("+ AboutBg +")",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center center",
    color:"#fff",
    height:"100vh",
    paddingTop:"20vh"
};
  return (
    <React.Fragment>
        <Container fluid style={BgOverlay} className="text-center">
            <section className="my-3">
                <h3>Quienes Somos</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur doloribus, assumenda dignissimos deleniti in!</p>
            </section>
            <section className="my-3">
                <h3>Misión</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit accusantium sunt quam aliquam praesentium ratione porro, corporis est dolorum id?</p>
            </section>
            <section className="my-3">
                <h3>Visión</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo distinctio debitis facilis, deserunt unde dolore quidem autem eligendi fuga corrupti.</p>
            </section>
        </Container>
    </React.Fragment>
  )
}
