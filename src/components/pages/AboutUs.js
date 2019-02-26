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
    height:"100vh",
    paddingTop:"10%"
};
  return (
    <React.Fragment>
        <Container fluid style={BgOverlay} className="p-2 text-center">
            <Link to="/"><Button color="link" className="mt-0 p-0"><FontAwesomeIcon icon="arrow-left" /> Volver</Button></Link>
            <section className="m-1 p-0">
                <h3>Quienes Somos?</h3>
            </section>
            <section className="m-2 p-0 text-left">
                <h3>Misión</h3>
                <p className="p-0 m-0">Promover la importancia del manejo del estrés y las emociones, brindándoles productos de calidad que ayuden a disminuir la tensión que se genera día a día. Estamos seguros que como empresa lograremos dar a los clientes un servicio que se ajuste a sus necesidades. </p>
            </section>
              <section className="m-2 p-0 text-left">
                <h3>Visión</h3>
                <p className="p-0 m-0">En el año 2022 ser una empresa constituida y reconocida en cuanto a la atención integral y promotora en reducir los niveles de estrés, por la calidad y el servicio prestado.</p>
            </section>
        </Container>
    </React.Fragment>
  )
}
