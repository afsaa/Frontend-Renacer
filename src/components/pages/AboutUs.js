import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Container, Button } from "reactstrap";
import PropTypes from "prop-types";
import AboutBg from '../../img/about/AboutBg.jpeg';

library.add(faArrowLeft);

Container.propTypes = {
    fluid: PropTypes.bool
    // applies .container-fluid class
};

export default function AboutUs() {
const BgOverlay = {
    position:"absolute",
    background:"linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url("+ AboutBg +")",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center center",
    color:"#fff",
    width:"100%",
    height:"100%",
    paddingTop:"10%"
};
  return (
    <React.Fragment>
        <Container fluid style={BgOverlay} className="text-center">
            <Link to="/"><Button color="link" className="mt-0 p-0"><FontAwesomeIcon icon="arrow-left" /> Volver</Button></Link>
            <section className="my-1">
                <h3>Quienes Somos</h3>
                <p className="p-0 m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur doloribus, assumenda dignissimos deleniti in!</p>
            </section>
            <section className="my-1">
                <h3>Misión</h3>
                <p className="p-0 m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit accusantium sunt quam aliquam praesentium ratione porro, corporis est dolorum id?</p>
            </section>
            <section className="my-1">
                <h3>Visión</h3>
                <p className="p-0 m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo distinctio debitis facilis, deserunt unde dolore quidem autem eligendi fuga corrupti.</p>
            </section>
        </Container>
    </React.Fragment>
  )
}
