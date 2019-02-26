import React, { Component, Fragment } from 'react';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ServiceItem from './ServiceItem';
import PropTypes from "prop-types";
import ServicesBg from '../img/services/servicesOverlay.jpeg';

library.add(faArrowLeft);

Container.propTypes = {
  fluid: PropTypes.bool
  // applies .container-fluid class
};

const BgOverlay = {
  position: "absolute",
  background: "linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(" + ServicesBg + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  color: "#fff",
  width: "100%",
  height: "56%",
  paddingTop: "10%"
};

export class ServicesAccordion extends Component {
  render() {
    return (
      <Fragment>
        <Link to="/"><Button color="link" className="mt-0"><FontAwesomeIcon icon="arrow-left" /> Volver</Button></Link>
        <ul style={{ padding:"0", marginBottom:"0" }}>
            {this.props.services.map(service => {
                return (
                    <ServiceItem
                        key={service.id}
                        id={service.id}
                        name={service.name}
                        subCategories={service.subCategories}
                        specificServices={service.specificServices}
                        collapse={service.collapse}
                        showInfo={this.props.showInfo}
                    />
                );
            })}
        </ul>
        <Container fluid style={ BgOverlay } className="text-center">
          <blockquote className="blockquote text-center">
            <p className="mb-0">Las emociones inexpresadas nunca mueren. Son enterradas vivas y salen más tarde de peores formas.</p>
            <footer className="blockquote-footer">Sigmund Freud </footer>
          </blockquote>
        </Container>
        </Fragment>
    )
  }
}

ServicesAccordion.propTypes = {
  services: PropTypes.array.isRequired,
  showInfo: PropTypes.func.isRequired
};

export default ServicesAccordion;

