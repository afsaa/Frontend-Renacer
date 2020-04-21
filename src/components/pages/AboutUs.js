import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Container, Button } from "reactstrap";
import PropTypes from "prop-types";
import AboutUsImage from "../../img/about/AboutBg.jpeg";
import "../style/aboutUs.css";

library.add(faArrowLeft);

Container.propTypes = {
  fluid: PropTypes.bool,
  // applies .container-fluid class
};

export default function AboutUs() {
  /*const BgOverlay = {
    position: "absolute",
    background:
      "linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(" + AboutBg + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    color: "#fff",
    width: "100%",
    height: "100vh",
    paddingTop: "10%",
  };*/
  return (
    <React.Fragment>
      <Container className="p-2 text-center">
        <Link to="/">
          <Button color="link" className="mt-0 p-0">
            <FontAwesomeIcon icon="arrow-left" /> Volver
          </Button>
        </Link>
        <h3 className="mt-3">¿Quienes Somos?</h3>
        <section className="about-us-container mt-3 p-0">
          <div className="m-2 p-0 text-left">
            <h3 className="ml-3 mb-3">Misión</h3>
            <p className="m-3 p-0 ">
              Promover la importancia del manejo del estrés y las emociones,
              brindándoles productos de calidad que ayuden a disminuir la
              tensión que se genera día a día. Estamos seguros que como empresa
              lograremos dar a los clientes un servicio que se ajuste a sus
              necesidades.{" "}
            </p>
          </div>
          <div className="m-3 p-0 text-center">
            <img
              src={AboutUsImage}
              alt="AboutUsImage"
              width="100%"
              className="about-us-image m-2 p-0"
            />
          </div>
          <div className="m-3 p-0 text-right">
            <h3 className="ml-3 mb-3">Visión</h3>
            <p className="m-2 p-0">
              En el año 2022 ser una empresa constituida y reconocida en cuanto
              a la atención integral y promotora en reducir los niveles de
              estrés, por la calidad y el servicio prestado.
            </p>
          </div>
        </section>
      </Container>
    </React.Fragment>
  );
}
